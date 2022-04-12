const mongoose = require("mongoose") 
const foodSchema = mongoose.Schema({ 
 category: String, 
 quality: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Food", 
foodSchema) 