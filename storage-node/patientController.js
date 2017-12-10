'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('MedRec');

exports.list_patients = function(req, res) {
  Task.find({}).populate({
  	path: 'conditions'
  }).exec(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_patient = function (req, res) {
	Task.findById(req.params.patientId).populate('conditions').exec(function (err, doc) {
		if (err) 
			res.send(err)
		res.json(doc);
	});
}