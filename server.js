const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//routers
const router = require('./routes/restaurantRouter')
app.use('/api/restaurants', router)


// // create MYSQL Pool
// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'mydb'
// });

// // GET request
// app.get('', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err){
//             console.log(err);
//         }
//         connection.query('select * from restaurants', (err, rows) => {
//             connection.release();

//             if(!err){
//                 res.send(rows);
//             }
//             else{
//                 res.status(400).send(err);
//             }
//         })
        
//     })
// })

// // Get users
// app.get('/users', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err){
//             console.log(err);
//         }
//         connection.query('select * from users', (err, rows) => {
//             connection.release();

//             if(!err){
//                 res.send(rows);
//             }
//             else{
//                 res.status(400).send(err);
//             }
//         })
        
//     })
// })


// // DELETE by ID request
// app.delete('/:id', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err){
//             console.log(err);
//         }
//         connection.query('delete from restaurants where id=?',[req.params.id], (err, rows) => {
//             connection.release();

//             if(!err){
//                 res.send(rows);
//             }
//             else{
//                 res.status(400).send(err);
//             }
//         })
        
//     })
// })

// // POST request
// app.post('/addRestaurant', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err){
//             console.log(err);
//         }
//         const {name, address, contact, added_by} = req.body;

//         connection.query('insert into restaurants (name, address, contact, added_by) values (?, ?, ?, ?)', [name, address, contact, added_by], (err, rows) => {
//             connection.release();

//             if(!err){
//                 res.send(rows);
//             }
//             else{
//                 res.status(400).send(err);
//             }
//         })
//     })
// })

// // GET by ID request
// app.get('/:id', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err){
//             console.log(err);
//         }
//         const {id} = req.params
//         connection.query('select * from restaurants where id=?',id, (err, rows) => {
//             connection.release();

//             if(!err){
//                 res.send(rows);
//             }
//             else{
//                 res.status(400).send(err);
//             }
//         })
        
//     })
// })

// // Update request
// app.put('/:id', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err){
//             console.log(err);
//         }
//         const {id} = req.params;
//         const {name, address, contact, added_by} = req.body;

//         connection.query('update restaurants set name = ?, address = ?,  contact = ?, added_by = ? where id = ?', [name, address, contact, added_by, id], (err, rows) => {
//             connection.release();

//             if(!err){
//                 res.send(rows);
//             }
//             else{
//                 res.status(400).send(err);
//             }
//         })
        
//     })
// })



app.listen(port);