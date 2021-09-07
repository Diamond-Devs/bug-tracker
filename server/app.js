var express = require('express');
var app = express();
var mysql = require('mysql2');
var JSON = require('JSON');

app.set('view engine', 'html');
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.static('public'));

var connection = mysql.createConnection({ //Use this command to log into the database manually: 'mysql -u root'
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'bugtracker',   // the name of your db
});

app.listen(3000, function () {
 console.log('App listening on port 3000!');
});
