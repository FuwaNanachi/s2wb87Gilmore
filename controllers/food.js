var Food = require('../models/food'); 
 

// List of all Costumes 

let document = new Food();


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
    console.log(req.body) 
    let document = new Food(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.food_category = req.body.food_category; 
    document.cost = req.body.cost; 
    document.quality = req.body.quality; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
exports.food_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Food.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 

exports.food_list = async function(req, res) { 
    try{ 
        theFood = await Food.find(); 
        res.send(theFood); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
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
exports.food_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Food.findById( req.query.id) 
        res.render('fooddetail',  
            { title: 'Food Detail', toShow: result }); 
                } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
        } 
    }; 
