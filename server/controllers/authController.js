const User=require('../models/User');  // import schema 
const bcrypt =require('bcrypt');

exports.signup=async(req,res)=>{
    const{name,username,email,password}=req.body;
    try{
        const hasedpassword=await bcrypt.hash(password,10); // hash the password
        const newUser=await User({name,username,email,password:hasedpassword});
        await newUser.save(); // save the data into database
        res.status(201).json({message:'new user add'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
};
