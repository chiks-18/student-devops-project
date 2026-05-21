const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend Server Running');
});

app.post('/addStudent', (req, res) => {

    const { name, mobile, location } = req.body;

    const sql =
        'INSERT INTO students (name, mobile, location) VALUES (?, ?, ?)';

    db.query(sql, [name, mobile, location], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send('Error inserting data');
        } else {
            res.send('Student Added Successfully');
        }
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});