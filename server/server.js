require('dotenv').config();
const express=require('express');
const database=require('./config/db'); // import database file
const cors=require('cors');
const PORT=process.env.PORT || 5000;

const app=express();

app.use(cors());
app.use(express.json());

//database
database()

//first route of the server
app.get('/',(req,res)=>{
    res.json({message:'this is start page'})
});


//listen the server
app.listen(PORT,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.info("server is run");
    }
});