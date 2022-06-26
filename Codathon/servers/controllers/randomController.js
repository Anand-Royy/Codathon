const mysql = require('mysql');
const { stringify } = require('querystring');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});




exports.view = (req,res)=>{
        
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
                }
                console.log('connected to database as ID: ' + connection.threadId); 
                
                connection.query('SELECT * FROM products',(err,products)=>{

                    connection.release();

                    if(!err){
                        res.render('home',{ products });
                    }else{
                        console.log(err);
                    }


                })

            });
}