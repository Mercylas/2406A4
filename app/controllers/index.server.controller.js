exports.render = function(req, res) {
    res.render('index', {
   		title: 'Midterm Application',
   		user: req.user ? req.user.name : ''
    });
};