const mysql = require('mysql2');

const connection = mysql.createConnection({

    host: 'mysql-service',

    user: 'root',

    password: 'root',

    database: 'studentdb'
});

connection.connect((err) => {

    if (err) {

        console.log('Database connection failed');
        console.log(err);

    } else {

        console.log('Connected to MySQL');
    }
});

module.exports = connection;