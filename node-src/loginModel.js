const mongoose=require('mongoose');


const LoginSchema=mongoose.Schema({
    loginName:{
        type:String,
        required:[true,'Login Name Required']
    },
    password:{
        type:String,
        required:[true,'Password Required']
    }


});


const LoginModel=mongoose.model('login',LoginSchema);

module.exports=LoginModel;

