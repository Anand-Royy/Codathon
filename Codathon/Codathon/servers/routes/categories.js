const express = require('express');
const router=express.Router();
const categories=require('../controllers/categoriesController1');

//CRUD operations
router.get('/',categories.view);




module.exports = router;