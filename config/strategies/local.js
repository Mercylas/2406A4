var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('mongoose').model('User');

module.exports = function() {
	passport.use(new LocalStrategy({passReqToCallback: true},
		function(req, username, password, done) {
		User.findOne(
			{username: username},
			function(err, user) {
				if (err) {
					return done(err);
				}
				
				if (!user) {
					return done(null, false, {message: 'Unknown user'});
				}
				/*
				console.log(req.body.studentId);
				console.log(user.studentId);
				*/
				if (user.studentId!==req.body.studentId) {
					return done(null, false, {message: 'Student Id does not match user'});
				}
				if (!user.authenticate(password)) {
					return done(null, false, {message: 'Invalid password'});
				}

				return done(null, user);
			}
		);
	}));
};