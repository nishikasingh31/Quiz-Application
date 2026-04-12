const quizService = require('../services/quizService');

//1
exports.createQuiz = async (req, res, next) => {
  try {
    const savedQuiz = await quizService.createQuiz(req.body);
    res.status(201).json(savedQuiz);
  } catch (error) {
    next(error);
  }
};

///2
exports.addQuestion = async (req, res, next) => {
  try {
    const savedQuestion = await quizService.addQuestion(req.params.quizId, req.body);
    res.status(201).json(savedQuestion);
  } catch (error) {
    next(error);
  }
};

//3
exports.getQuizzes = async (req, res, next) => {
  try {
    const quizzes = await quizService.getQuizzes();
    res.json(quizzes);
  } catch (error) {
    next(error);
  }
};

//4
exports.getQuizQuestions = async (req, res, next) => {
  try {
    const questions = await quizService.getQuizQuestions(req.params.quizId);
    res.json(questions);
  } catch (error) {
    next(error);
  }
};

//5
exports.submitAnswers = async (req, res, next) => {
  try {
    const result = await quizService.submitAnswers(req.params.quizId, req.body.answers);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
