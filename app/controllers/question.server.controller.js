var User = require('mongoose').model('User');
exports.render = function(req, res) {
	User.find({}, function(err, users) {
		if (err) {
			return next(err);
		}
		else {
			res.render('question', {
   			title: 'Question',
   			user: req.user ? req.user.name : '',
   			questions: users
    	});
		}
	});
};