var Question = require('mongoose').model('TestQuestion');
exports.render = function(req, res) {
			res.render('question', {
   			title: 'Question',
   			user: req.user ? req.user.name : '',
   			questions: req.question
	});
};
exports.update = function(req, res, next) {
		return res.redirect('/quiz');
};