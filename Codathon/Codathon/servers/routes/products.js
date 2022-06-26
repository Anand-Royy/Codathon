const express = require('express');
const router=express.Router();
const products=require('../controllers/productsController');

//CRUD operations
router.get('/',products.view);




module.exports = router;