const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// create MYSQL Pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

// GET request
app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err){
            console.log(err);
        }
        connection.query('select * from restaurants', (err, rows) => {
            connection.release();

            if(!err){
                res.send(rows);
            }
            else{
                res.status(400).send(err);
            }
        })
        
    })
})

// DELETE by ID request
app.delete('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err){
            console.log(err);
        }
        connection.query('delete from restaurants where id=?',[req.params.id], (err, rows) => {
            connection.release();

            if(!err){
                res.send(rows);
            }
            else{
                res.status(400).send(err);
            }
        })
        
    })
})

// POST request
app.post('/addRestaurant', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err){
            console.log(err);
        }
        const {name, address, contact} = req.body;

        connection.query('insert into restaurants (name, address, contact) values (?, ?, ?)', [name, address, contact], (err, rows) => {
            connection.release();

            if(!err){
                res.send(rows);
            }
            else{
                res.status(400).send(err);
            }
        })
    })
})

// GET by ID request
app.get('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err){
            console.log(err);
        }
        const {id} = req.params
        connection.query('select * from restaurants where id=?',id, (err, rows) => {
            connection.release();

            if(!err){
                res.send(rows);
            }
            else{
                res.status(400).send(err);
            }
        })
        
    })
})

// Update request
app.put('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err){
            console.log(err);
        }
        const {id} = req.params;
        const {name, address, contact} = req.body;

        connection.query('update restaurants set name = ?, address = ?,  contact = ? where id = ?', [name, address, contact, id], (err, rows) => {
            connection.release();

            if(!err){
                res.send(rows);
            }
            else{
                res.status(400).send(err);
            }
        })
        
    })
})



app.listen(port, ()=>console.log(`Listening on ${port}`));