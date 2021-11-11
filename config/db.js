/*
    THIS IS CONSISTS OF DB CONFIG LOGICE
*/
// setting up mysql
const mysql = require('mysql2')

// setting up mysql pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tests',
    password: 'root',
    multipleStatements: true,
})

module.exports = pool.promise()