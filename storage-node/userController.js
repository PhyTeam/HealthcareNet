'use strict';
require('./userModel')
var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Document = mongoose.model('Document');

var validate = require('express-validation');


exports.create_user = function(req, res) {
    req.checkBody('email', 'Email must be specified').notEmpty();
    req.checkBody('name', 'Name must be specified').notEmpty();
    req.checkBody('public_key', 'Public key must be specified').notEmpty();
    req.checkBody('signature', 'Signature must be specified').notEmpty();
    req.checkBody('username', 'Username must be specified').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
    	res.status(400);
    	res.send(errors);
    } else {
    	var new_user = new User(req.body);

    	new_user.save(function(err, task) {
	    if (err) {
	      res.status(401);
	      res.send(err);
	  	  return;
	    }

	  	res.status(200);
	    res.json(new_user);
	    return;
	  });
    }
    return;
}

exports.fetch_a_user = function(req, res) {
	User.find({username: req.params.username}, function (err, doc) {
		if (err) 
			res.send(err)
		res.json(doc);
	});
}

exports.new_document = function(req, res) {
	req.checkBody('creator', 'Email must be specified').notEmpty();
    req.checkBody('encrypted_content', 'Name must be specified').notEmpty();
    req.checkBody('encrypted_key', 'Public key must be specified').notEmpty();
    req.checkBody('name', 'Signature must be specified').notEmpty();
    req.checkBody('signature', 'Username must be specified').notEmpty();

    console.log(req.body);
    var errors = req.validationErrors();
    if (errors) {
    	res.status(400);
    	res.send(errors);
    } else {
    	var new_doc = new Document(req.body);
    	new_doc.created_at = Date.now();

    	new_doc.save(function(err, task) {
    		if(err) {
    			res.status(401);
    			res.send(err);
    			return;
    		} else {
    			res.status(200);
    			res.json(new_doc);
    			return;
    		}
    	});
    }
    return;
}

exports.list_summary_document = function(req, res) {
	Document.findById(req.params.id, function(err, doc) {
		if (err)
			res.send(err);
		res.json({
			creator: doc.creator,
			encrypted_key: doc.encrypted_key,
			name: doc.name,
			signature: doc.signature,
			created_at: doc.created_at
		});
	});
}

exports.list_summary_document_by_username = function(req, res) {
	var username = req.params.username;
	if (!username) {
		res.status(400);
		res.send("Invalid username");
	}

	Document.find({creator: username}, function(err, docs) {
		if (err)
			res.send(err);
		console.log(docs);
		res.json(
			docs.map(function (doc){
				return {
					creator: doc.creator,
					encrypted_key: doc.encrypted_key,
					name: doc.name,
					signature: doc.signature,
					created_at: doc.created_at
				}
		}));
	});
}

