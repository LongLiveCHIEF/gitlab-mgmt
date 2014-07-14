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


