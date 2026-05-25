const mysql = require('mysql2');

const connection = mysql.createConnection({

    host: 'mysql-container',

    user: 'root',

    password: 'root123',

    database: 'studentdb',

    port: 3306

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