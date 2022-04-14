var Food = require('./models/food'); 
 

// List of all Costumes 
exports.food_view_all_Page = async function(req, res) { 
    try{ 
        theFoods = await Food.find(); 
        res.render('foods', { title: 'Food Search Results', results: theFoods }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.food_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.food_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.food_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.food_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food update PUT' + req.params.id); 
}; 


