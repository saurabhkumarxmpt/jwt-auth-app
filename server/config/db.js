require('dotenv').config();
const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URI); //URI from .env file
        console.info('database connect');
    }catch{
        console.log('database not connect');
    }
};

module.exports=connectDB;  //export the module