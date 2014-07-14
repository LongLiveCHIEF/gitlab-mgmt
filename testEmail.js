"use strict";

var Email = require('email').Email;

var user = {
    password:"",
    username:"",
    email:"",
    name:""
}

// welcome message configuration
var welcomeMsgConfig = {
    from:'',
    subject:'Your Gitlab Login Info' 
}



function prepEmail(user){
    var msg = new Email({
        from:welcomeMsgConfig.from,
        to:user.email,
        subject:welcomeMsgConfig.subject,
        body: "Use the following information to login to our HackDay Gitlab instance \r\n Gitlab:  http://173.9.254.140 \r\n Login: "+ user.username + "\r\n Your Password: " + user.password
    })
    
    return msg;
    
}


// Send Email
var msgReady = prepEmail(user);
msgReady.send(function(err){
    if(err){
        console.log("error",err);
    }
});