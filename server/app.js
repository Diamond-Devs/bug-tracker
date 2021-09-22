var express = require('express');
var app = express();
var mysql = require('mysql2');
var JSON = require('JSON');
var cors = require('cors');

app.set('view engine', 'html');
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.static('public'));

var connection = mysql.createConnection({ //This command is used to log into the database
  host     : 'localhost',
  user     : 'root',     // Insert your MySQL root username
  database : 'dbname',   // Insert the name of your db
});

app.use(function(req, res, next) {//This section allows specified foreign domains to access this node app
    console.log(`Domain origin of current request is: ${req.headers.origin}`);
    const corsWhitelist = [//This identifies the exclusive domains allowed to access this app
        'https://exampledomain1.com',
        'https://exampledomain2.com'
    ];
    //The below if statement sets CORS to allow many types of requests to be made to this app
    if (corsWhitelist.find(origin => origin == String(req.headers.origin))) {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    }
    next();
});

app.post("/",(req,res,err) => {//Currently this is just confirming the front-end can send data to this node app
    console.log(req.body)
    if (err) {
      console.log(err)
    }
})

const port = 3001;

app.listen(port, function () {
 console.log(`App listening on port ${port}!`);
});
