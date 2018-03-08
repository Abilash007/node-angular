var express=require('express');
var app=express();
const mongoose=require('mongoose');
const SignUpModel=require('./model');
const LoginModel=require('./loginModel');
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');

mongoose.connect('mongodb://abilashrs:123456789@ds161148.mlab.com:61148/sampledb').then(()=>{
    console.log('Connected to Remote DB');
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.listen(5000,function(){
    console.log("Server started...")
})

app.get('/profile',(req,res)=>{
   // res.send("Katta");
   SignUpModel.find().then(data=>{
       console.log(data);
   })
});


app.post('/signup',(req,res)=>{

        console.log(req.body);

        var objModel=new SignUpModel(req.body);
        objModel.save().then((data)=>{
            res.send({"status":"success","message":"Data Inserted"});
        }).catch(function (error) {
            res.send({"status":"fail","message":"Insertion Failed"});
          })

});

app.post('/login',(req,res)=>{

    SignUpModel.find({'loginName':req.body.loginName ,'password':req.body.password}).then((data)=>{

        if(data){

            // var token = jwt.sign({ 'data': data[0] }, 'shhhhh1111');
            // console.log("Encrypted=>",token);
            // jwt.verify(token, 'shhhhh1111', function(err, decoded) {
            //     console.log("Decrypted=>",decoded);
            //   });

            res.send({"status":"success","message":"Login Success","userData":data[0]['loginName']});
            
        }else{
           
             res.send({"status":"fail","message":"Login Failed"});
           
        }
    });
        
        
    
   

});
