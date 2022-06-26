const express = require('express');
const router=express.Router();
const categories=require('../controllers/categoriesController');
const random=require('../controllers/randomController');

//CRUD operations
router.get('/',categories.view);
router.get('/',random.view);



module.exports = router;