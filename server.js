const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app=express();
require('dotenv').config();
app.use(express.json())
const {getData,
    getUserData,
    updateUserData,
    createUserData,
    removeUserData
}=require('./controlloers/controllers')
app.use(cors());
const PORT=process.env.PORT;


app.get('/',getData);
app.get('/user/:email',getUserData);
app.post('/creatFruit/:email',createUserData);
app.put('/updateFruit/:id',updateUserData);
app.delete('/deleteFruit/:id',removeUserData);
app.listen(PORT,()=>console.log(`listing on port ${PORT}`))