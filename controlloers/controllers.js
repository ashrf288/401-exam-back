const axios = require('axios');
const {FruitModel}=require('../Moudle/module.mongoose')

let getData=(req,res)=>{
    axios.get(process.env.BASE_URI).then(resp=>{
        if(resp){ res.status(200).json(resp.data.fruits)}
       
    })
}


let createUserData=(req,res)=>{
    let email=req.params.email;
    let {name,price,image}=req.body;
    FruitModel.create({email,name,price,image},(error,result)=>{
        if(error){res.status(500).send('error happended')}
        else{res.status(200).json({msg:'user created',data:result})}
    })
}

let getUserData=(req,res)=>{
    let email=req.params.email;

    FruitModel.find({email},(error,result)=>{
        if(error){res.status(500).send('error happended')}
        else{res.status(200).json(result)}
    })
}

let updateUserData=(req,res)=>{
    let id=req.params.id;
    let data=req.body
    FruitModel.findByIdAndUpdate(id,{$set:data},{new:true}).then(resp=>{
        if(resp){res.status(200).json({msg:'user updated',details:resp})}
        else{res.status(404).send('fruit with that id not found')}
    })
}

let removeUserData=(req,res)=>{
    let id=req.params.id;
    FruitModel.findByIdAndDelete(id).then(resp=>{
        if(resp){res.status(200).json('fruit deleted')}
        else{res.status(404).send('fruit with that id not found')}
    })
}
module.exports={getData,getUserData,updateUserData,createUserData,removeUserData}