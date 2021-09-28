const mongoose = require('mongoose');



mongoose.connect(process.env.MONGO_DB);


let FruitSchema=mongoose.Schema({

email:String,
name:String,
image:String,
price:String
})



let FruitModel=mongoose.model('FruitModel',FruitSchema);


module.exports={FruitModel}