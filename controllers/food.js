var Food = require('../models/food'); 
 

// List of all Costumes 

let document = new Costume();

document.food_type = req.body.costume_type; 
document.cost = req.body.cost; 
document.size = req.body.size; 

exports.food_view_all_Page = async function(req, res) { 
    try{ 
        theFoods = await Food.find(); 
        res.render('food', { title: 'Food Search Results', results: theFoods }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.food_detail = async function(req, res) {
    console.log("detail" + req.params.id) 
    try{
        result = await Food.findById(req.params.id)
        res.send(result)
    } catch(error){
        res.status(500)
        res.send(`{"error": document for id ${req.params.id}not found`)
    }
}; 
 
// Handle Costume create on POST. 
exports.food_create_post = async function(req, res) { 
    res.send('NOT IMPLEMENTED: Food create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.food_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food delete DELETE ' + req.params.id); 
}; 
 

exports.food_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume list'); 
}; 

exports.food_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Food.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.food_catgory)  
               toUpdate.food_category = req.body.food_category; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.quality) toUpdate.quality = req.body.quality; 
        let result = await toUpdate.save(); 
        console.log("Success " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
