var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TestQuestionSchema = new Schema({
	question: String,
	correctAnswer: String,
	answers: [{
    	A: String,
    	B: String,
    	C: String,
    	D: String,
    	E: String
	}]
});

mongoose.model('TestQuestion', TestQuestionSchema);