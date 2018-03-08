const mongoose=require('mongoose');

const SignUpSchema=mongoose.Schema({
    Name:{
        type:String,
        required:[true,'Name Required']
    },
    loginName:{
        type:String,
        required:[true,'Login Name Required']
    },
    password:{
        type:String,
        required:[true,'Password Required']
    },
    gender:{
        type:String,
        required:[true,'Gender Required']
    },
    dob:{
        type:String,
        required:[true,'DOB Required']
    },
    mobile:{
        type:Number,
        required:[true,'Mobile Required']
    }


});



const SignUpModel=mongoose.model('signup',SignUpSchema);



module.exports=SignUpModel;