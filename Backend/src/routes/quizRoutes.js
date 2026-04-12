const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

//creating q
router.post('/quizzes', quizController.createQuiz);

//adding ques
router.post('/quizzes/:quizId/questions', quizController.addQuestion);

//gting quiz
router.get('/quizzes', quizController.getQuizzes);

//geting all ques
router.get('/quizzes/:quizId/questions', quizController.getQuizQuestions);

//submit ans
router.post('/quizzes/:quizId/submit', quizController.submitAnswers);

module.exports = router;

