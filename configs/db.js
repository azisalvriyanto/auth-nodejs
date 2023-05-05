const mysql = require("mysql");
require('dotenv/config')

// Create a connection to the database
const connection = mysql.createConnection({
    host: `${process.env.DB_HOST}:${process.env.DB_PORT}`,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;