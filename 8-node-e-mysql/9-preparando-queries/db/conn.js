const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'hudson2',
    password: 'Abc123456.',
    database: 'nodemysql',
})

module.exports = pool