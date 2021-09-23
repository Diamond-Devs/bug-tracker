const express = require('express');
const app = express();
const mysql = require('mysql2');
const JSON = require('JSON');
const cors = require('cors');
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: __dirname + '/.env' });
}

console.log("Process started at: " + new Date());
console.log("If anything shows up after this, the .env file has been loaded properly: " + process.env.corsdomain1);

app.set('view engine', 'html');
app.use(cookieParser());
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.static('public'));

var connection = mysql.createConnection({ //This command is used to log into the database
  host     : 'localhost',
  user     : 'root',     // Insert your MySQL root username
  database : process.env.database,   // Insert the name of your db
});

app.use(function(req, res, next) {//This section allows specified foreign domains to access this node app
    console.log(`Domain origin of current request is: ${req.headers.origin}`);
    if (req.headers.origin == undefined) {
        console.log(req.headers)
    }
    
    const corsWhitelist = [//This identifies the exclusive domains allowed to access this app
        process.env.corsdomain1,
        process.env.corsdomain2
    ];
    //The below if statement sets CORS to allow many types of requests to be made to this app
    if (corsWhitelist.find(origin => origin == String(req.headers.origin))) {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    }
    next();
});

app.post("/login-route", function(req,res) {
    console.log(req.body)
	const Postres = res;
    const Postreq = req;
    let returndata = {};
    var sqlstatement = "SELECT password FROM users WHERE username in ('" + req.body.name + "')"
    connection.query(sqlstatement, async function(err, res) {
		if(err){//This throws if the username doesn't exist in the database
            console.log(err);
            returndata.usernamepass = false;
        }
        else{
            returndata.usernamepass = true;
        }
		ExistPW = res[0].password;
		bcrypt.compare(Postreq.body.password, ExistPW, function(err, res) { //This function takes in the raw password (DO NO HASH IT), hashes it, then compares vs the database's hashed version of the password. DO NOT HASH THE PASSWORD BEFORE PASSING IT TO THE .compare METHOD!!
			if (err){
                console.log(err);
                    returndata.loginerror = true;
                    Postres.json(returndata);
			  }
			if (res){
                console.log("It's a match!");
                returndata.passwordpass = true;
                Postres.json(returndata);
				Postres.cookie('userprofile', Postreq.body.username);
				Postres.redirect("/Dashboard.js");
			  }
			else {
                console.log("Not a match!");
                returndata.passwordpass = false;
                Postres.json(returndata);
			  }
		});
	});
});

app.post('/register', async function(req,res){
    hashedPassword = await bcrypt.hash(req.body.password, 10) // await hashed password
    Postres = res;
	// in the below SQL statement, use the hashed Password
    var sqlstatement = "INSERT INTO users(first_name, last_name, username, password, email) VALUES('" + req.body.firstname + "', '" + req.body.lastname + "', '" + req.body.username + "', '" + hashedPassword + "', '" + req.body.email + "')"
    connection.query(sqlstatement, function(err, result) {
        if(result){
            Postres.json({registrationsuccess: true}); //Boolean sent to trigger next step on client end
            Postres.cookie('userprofile', Postreq.body.username);
        }
        if(err)
            console.log("The error, if any, is: " + err);
            Postres.json({registrationsuccess: false});//Boolean sent to trigger end-user to fix user errors in registration data
        });
});

const port = 3001;

app.listen(port, function () {
 console.log(`App listening on port ${port}!`);
});
