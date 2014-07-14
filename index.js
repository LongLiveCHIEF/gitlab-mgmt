"use strict";

var fs = require('fs');
var csv = require('csv');
var config = require('./config/auth.js');
var userListFile = process.argv[2];


// Connection
var gitlab = new (require('gitlab'))({
  url:   config.gitlab.url,
  token: config.gitlab.token
});

// Listing users
gitlab.users.all(function(users) {
  for (var i = 0; i < users.length; i++) {
    console.log("#" + users[i].id + ": " + users[i].email + ", " + users[i].name + ", " + users[i].created_at);
  }
});
