var Question = require('mongoose').model('TestQuestion');
exports.render = function(req, res) {
	Question.find({}, function(err, question) {
		if (err) {
			return next(err);
		}
		else {
			res.render('quiz', {
   			title: 'Midterm Quiz',
   			user: req.user ? req.user.name : '',
   			questions: question
    	});
		}
	});
};
exports.questionByID = function(req, res, next, id) {
	Question.findOne({
			_id: id
		}, 
		function(err, question) {
			if (err) {
				return next(err);
			}
			else {
				req.question = question;
				next();
			}
		}
	);
};