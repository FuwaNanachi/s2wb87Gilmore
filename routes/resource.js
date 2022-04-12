var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var food_controller = require('../controllers/food'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/food', food_controller.food_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/food/:id', food_controller.food_delete); 
 
// PUT request to update Costume. 
router.put('/resource/food/:id', 
food_controller.food_update_put); 
 
// GET request for one Costume. 
router.get('/resource/food/:id', food_controller.food_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/food', food_controller.food_list); 
 
module.exports = router; 