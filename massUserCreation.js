"use strict";

var fs = require('fs');
var csv = require('csv');
var config = require('./config/auth.js');
var userListFile = process.argv[2];
var Promise = require('bluebird');
var Email = require('email').Email;


// Connection
var gitlab = Promise.promisifyAll(new (require('gitlab'))({
  url:   config.gitlab.url,
  token: config.gitlab.token
}));

// welcome message
var welcomeMsgConfig = {
    from:'',
    subject:'Your Gitlab Login Info' 
}



// Config user from raw data
function configUser(data){
    var password = makePass();
    
    var user = {
        email: data.email,
        password: password,
        username: data.username,
        name: data.FullName,
        projects_limit: 3,
        can_create_group:true
    }
    return user;
}
// function to make email for user, must be configured user!

function prepEmail(user){
    var msg = new Email({
        from:welcomeMsgConfig.from,
        to:user.email,
        subject:welcomeMsgConfig.subject,
        body: "Use the following information to login to our HackDay Gitlab instance \r\n Gitlab:  http://173.9.254.140 \r\n Login: "+ user.username + "\r\n Your Password: " + user.password
    })

    
    return msg;
}
// return a random simple medium strength password
function makePass(){
    
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

