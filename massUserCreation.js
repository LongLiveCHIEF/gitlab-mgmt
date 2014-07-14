"use strict";

var fs = require('fs');
var csv = require('csv');
var config = require('./config/auth.js');
var userListFile = process.argv[2];
var Promise = require('bluebird');


// Connection
var gitlab = Promise.promisifyAll(new (require('gitlab'))({
  url:   config.gitlab.url,
  token: config.gitlab.token
}));

// Create a User

gitlab.users.create({
    email: user.email,
    password: user.password,
    username: user.username,
    name: user.name,
    projects_limit: 3,
    can_create_group:true
});


function makePass()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}