
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var MedRecSchema = new Schema({
	bio: {
		code: {
			type: String,
			index: true,
			unique: true
		},
		name: {
			type: String,
			required: 'missing name of patient'
		},
		address: {
			street: String,
			area: String
		},
		phone: String,
		email: String,
		dob: { type: Date, default: Date.now },
		bloodType: String

	},
	conditions: [{type: Schema.Types.ObjectId, ref: 'ConditionEvent'}],
	allergies: [{type: Schema.Types.ObjectId, ref: 'Allergy'}],
	labs: [{type: Schema.Types.ObjectId, ref: 'Labs'}],
	encounters: [{type: Schema.Types.ObjectId, ref: 'Encounter'}]
});

var ConditionEventSchema = new Schema({
	event_name: String,
	date: {type: Date, default: Date.now },
	detail: {
		description: String,
		encounters: String,
		labs: String,
		medications: String
	}
});

var AllergySchema = new Schema({
	type: String,
	name: String,
	description: String
});

var LabsSchema = new Schema({
	labName: String,
	date: {type: Date, default: Date.now()},
	trending_analysis: String,
	labs_detail: String,
	physician_notes: String,
	about: String
});

var EncounterSchema = new Schema({
	date: Date,
	type: String,
	place: String,
	goal: String,
	outcomes: String,
	next_steps: String
});

var Task = mongoose.model('Task', TaskSchema);
var MedRec = mongoose.model('MedRec', MedRecSchema);
var ConditionEvent = mongoose.model('ConditionEvent', ConditionEventSchema);
var Allergy = mongoose.model('Allergy', AllergySchema);
var Labs = mongoose.model('Labs', LabsSchema);
var Encounter = mongoose.model('Encounter', EncounterSchema);

function createSampleDatabase() {
	var testCondition = new ConditionEvent({
		event_name: "Ankle Sprain",
		data: Date.now,
		detail: {
			description: "Slipped on ice and fell.",
			encounters: "Example Encounter 03/31/2005",
			labs: "Example Lab 09/14/2007",
			medications: "Example Medication"
		}
	});
	var testCondition2 = new ConditionEvent({
		event_name: "Viêm khớp (ICD-K30)",
	    date: "October 31, 2007",
	    detail: {
	      description: "Ngã.",
	      encounters: "Example Encounter 03/31/2005",
	      labs: "Example Lab 09/14/2007",
	      medications: "Example Medication"
	    }
	});
	var testCondition3 = new ConditionEvent({
		event_name: "Viêm ruột thừa (ICD-K31)",
	    date: "October 31, 2007",
	    detail: {
	        description: "Slipped on ice and fell.",
	        encounters: "Example Encounter 03/31/2005",
	        labs: "Example Lab 09/14/2007",
	        medications: "Example Medication"
	      }
	});


	var allergy1 = new Allergy({
		type: "Severe",
		name: "Hải sản",
		description: "sốc phản vệ"
	});

	var allergy2 = new Allergy({
		type: "",
		name: "Ketoconazole",
		description: "viêm da"
	});

	var testMedRec = new MedRec ({
		bio: {
		  code: 'JTTO331613',
		  name: "Nguyễn Văn A",
	      address: {
	        street: "131 Paster",
	        area: "Thành Phố Hồ Chí Minh, MN 55404"
	      },
	      phone: "202-800-1210",
	      email: "grandmalucy@email.net",
	      dob: "DEC 28 1940",
	      yearold: 72,
	      bloodType: 'O-'
	  	},
	  	conditions: [],
	  	allergies: []
	});

	testCondition.save()
		.then(function(doc){
			testMedRec.conditions.push(doc._id);
			return testCondition2.save();
		})
		.then(function(doc){
			testMedRec.conditions.push(doc._id);
			return testCondition3.save();
		})
		.then(function(doc){
			testMedRec.conditions.push(doc._id);
			return allergy1.save();
		})
		.then(function(doc){
			testMedRec.allergies.push(doc._id);
			return allergy2.save()
		})
		.then(function(doc){
			testMedRec.allergies.push(doc._id);
			return testMedRec.save();
		})
		.then(function (doc) {
			console.log("Added completed");
		})
		.catch(function(err){
			console.log(err);
		});
}

createSampleDatabase();


module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('MedRec', MedRecSchema);
