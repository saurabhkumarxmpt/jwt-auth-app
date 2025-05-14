require('dotenv').config();
const User=require('../models/User');  // import schema 
const sendMail=require('../config/sendemail'); //import email modeule
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');


//  Signup module
exports.signup=async(req,res)=>{
    const{name,username,email,password}=req.body;
    try{
        
        const hasedpassword=await bcrypt.hash(password,10); // hash the password
        const newUser=await User({name,username,email,password:hasedpassword});
        await newUser.save(); // save the data into database

        //for sending email to new user
        await sendMail(
            email,
            'Welcome to Our App 🎉',
             `Hi ${username},\n\nThanks for signing up! We're glad to have you.`
        );
        res.status(201).json({message:'new user add'});

        //email send to user
        
    }catch(err){
        res.status(500).json({message:err.message});
    }
};


// Login module
exports.login=async(req,res)=>{
    const {username,password}=req.body;
    try{
        const user=await User.findOne({username});
        if(!user) return res.status(400).json({mesage:"invalid text"});

        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:'invalid password'});

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: '1d'});
        res.json({user,token});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
