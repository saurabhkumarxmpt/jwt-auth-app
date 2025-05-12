const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true

    }
});

const User=mongoose.model('users',userSchema);

module.exports=User;