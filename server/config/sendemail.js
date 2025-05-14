require('dotenv').config();
const nodemailer=require('nodemailer');


const sendEmail=async(to,subject,text)=>{
    const tarnsporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }

    });

    const mailOption={
        from:process.env.EMAIL,
        to,
        subject,
        text
    };

    await tarnsporter.sendMail(mailOption);
};

module.exports=sendEmail;