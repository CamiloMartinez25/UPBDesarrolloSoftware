var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nutriLeaks',
    database: 'nutrileaks'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
}) 


module.exports = connection;
