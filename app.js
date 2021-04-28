var express= require('express');
var app=express();
var bodyParser= require('body-parser');
var nodemailer= require('nodemailer');
var urlencodedParser=bodyParser.urlencoded({extended:false});
var PORT= process.env.PORT || 3031;

var path =require('path');
var email='';
var name1='';
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
    //for get to this route request we join all static files and display
    res.sendFile(path.join(__dirname,'public','index.html')); 
});
app.post('/',urlencodedParser,function(req,res){
    //for post request to this route, user posted his data inside form and we receive it in req.body
    //we collect the email details from req.body and send user a thank you email
    console.log(req.body);
     email=req.body.email;
     name1=req.body.id;
     console.log(email)
    var transporter= nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user:'herokuvishal@gmail.com',
        pass:'Bvishal17'
    },//close auth
    tls:{
        rejectUnauthorized : false

    }

    })//close transporter
    var mailOptions={
        from:'vishalbabburi@gmail.com',
        to:`${email}`,
        subject:'feedback',
        text:'Dear '+name1+',thank you for feedback- From Sai Vishal'

    }
    /*transporter.sendMail(mailOptions); */
    

    transporter.sendMail(mailOptions, (error,info) =>
            {  if (error){
                    return console.log(error);

                }
                 console.log(info);
                res.sendFile(path.join(__dirname,'public','index.html'));
        }
    );
    
})//close app.post

app.listen(PORT);
