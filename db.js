const mysql = require('mysql');
//localhost mysql db connection

const dbConn = mysql.createConnection({
    host : '35.226.2.120',
    user : 'root',
    password : 'e?ztGc&9HuKh6J(I',
    database : 'feedback'
});

dbConn.connect(function(err) {
    if(err) throw err;
    console.log("Database Connected!");
}); 

module.exports = dbConn;