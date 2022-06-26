const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;


require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.engine('hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');



const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.getConnection((err, connection) => {
    if (err) {
        throw err;
        }
        console.log('connected to database as ID: ' + connection.threadId); 
    });



const routes = require('./servers/routes/products');
app.get('/',routes);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})