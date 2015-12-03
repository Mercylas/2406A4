var Question = require('mongoose').model('TestQuestion');
var Response = require('mongoose').model('TestResponse');
var mongoose = require('mongoose');

exports.render = function(req, res) {
			Response.findOne({ userId: req.user.username }, function (err, doc){
				if (err) {
				return next(err);
				}
				else {
				if(doc){
					if(doc.answers[req.question.questionNum]){
					res.render('question', {
   					title: 'Question',
   					user: req.user ? req.user.name : '',
   					questions: req.question,
   					checked: doc.answers[req.question.questionNum]
   					});
					}else{
					res.render('question', {
   					title: 'Question',
   					user: req.user ? req.user.name : '',
   					questions: req.question,
   					checked: "X"
   					});
					}
				}else{
				res.render('question', {
   					title: 'Question',
   					user: req.user ? req.user.name : '',
   					questions: req.question,
   					checked: "X"
   					});
				}
			}
			});
};
exports.update = function(req, res, next) {
		Response.findOne({ userId: req.user.username}, function (err, doc){
		if(req.body.answer){
			var location = mongoose.Types.ObjectId(req.headers.referer.split("quiz/")[1]);
			Question.findOne({_id: location}, function (err, q){
				number = q.questionNum;
				console.log(req.user.name + " changed answer of question:" + number + " to " + req.body.answer);
  				doc.answers.set(number, req.body.answer);
  				doc.markModified('answers');
 				doc.save();
			});
 		}
		});
		return res.redirect('/quiz');
};