var User = require('mongoose').model('User');
exports.render = function(req, res) {
	User.find({}, function(err, users) {
		if (err) {
			return next(err);
		}
		else {
			res.render('quiz', {
   			title: 'Midterm Quiz',
   			user: req.user ? req.user.name : '',
   			questions: users
    	});
		}
	});
};
exports.questionByID = function(req, res, next, id) {
	User.findOne({
			_id: id
		}, 
		function(err, user) {
			if (err) {
				return next(err);
			}
			else {
				req.user = user;
				next();
			}
		}
	);
};