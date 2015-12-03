module.exports = function(app) {
    var quiz = require('../controllers/quiz.server.controller');
    var question = require('../controllers/question.server.controller');
    app.get('/quiz', quiz.render);
    app.get('/quiz/:questionsId',question.render);
    app.param('questionsId', quiz.questionByID);
};