var express = require('express');
const food_controlers = require('../controllers/food')
var router = express.Router();


const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 
/* GET home page. */
router.get('/', food_controlers.food_view_all_Page);
router.get('/detail', food_controlers.food_view_one_Page);
router.get('/create', food_controlers.food_create_Page);
router.get('/update', secured, food_controlers.food_update_Page);
router.get('/delete', food_controlers.food_delete_Page); 


module.exports = router;
