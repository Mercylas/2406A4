var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TestQuestionSchema = new Schema({
	question: String,
	correctAnswer: String,
	answers: [{
    type: String
	}]
});

mongoose.model('TestQuestion', TestQuestionSchema);