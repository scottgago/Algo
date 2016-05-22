const express = require('express'),
      bodyParser = require('body-parser')

exports.app = express();
exports.app.use(bodyParser.urlencoded({ extended: true }));
exports.app.use(bodyParser.json());

exports.app.listen(3000, function(){
	console.log("Server listening on port 3000");
});

const router = require('./Server/router.js');