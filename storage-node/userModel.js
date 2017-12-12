'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	public_key: {type: String, required: true},
	signature: {type: String, required: true},
	name: {type: String, required: true},
	email: {type: String, required: true} ,
	username: {type: String, required: true, index: true} 
});

var ShareRequestSchema = new Schema({
	document_id: {type: String, required: true},
	encrypted_key: {type: String, required: true},
	signature: {type: String, required: true},
	to: {type: String, required: true}
});

var DocumentSummarySchema = new Schema({
	created_at: {type: String, required: true},
	creator: {type: String, required: true},
	encrypted_key: {type: String, required: true},
	id: {type: String, required: true},
	name: {type: String, required: true}
});

var DocumentSchema = new Schema({
	created_at: {type: String, required: true, default: Date.now()},
	creator: {type: String, required: true},
	encrypted_content: {type: String, required: true},
	encrypted_key: {type: String, required: true},
	name: {type: String, required: true},
	signature: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('ShareRequest', ShareRequestSchema);
module.exports = mongoose.model('Document', DocumentSchema);
module.exports = mongoose.model('DocumentSummary', DocumentSummarySchema);