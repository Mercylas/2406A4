var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TestResponseSchema = new Schema({
	userId: String,
	answers: [{
		type:String
	}]
});

mongoose.model('TestResponse', TestResponseSchema);