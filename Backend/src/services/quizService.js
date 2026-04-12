const Quiz = require('../models/Quiz');
const Question = require('../models/Question');
const Joi = require('joi');

/// Joi schemas for body validation
//joi defines schema, it is a set of rules that defined what valid data should look like
//ussing .validate , joi checks the input and validate the input
//also provide specific error msgs-prevents bugs
const quizSchema = Joi.object({
  title: Joi.string().min(1).max(100).required(),
});

const optionSchema = Joi.object({
  text: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
});

const questionSchema = Joi.object({
  text: Joi.string().max(300).required(),
  type: Joi.string().valid('single_choice', 'multiple_choice', 'text').required(),
  options: Joi.array().items(optionSchema).when('type', {
    is: Joi.valid('single_choice', 'multiple_choice'),
    then: Joi.required(),
    otherwise: Joi.forbidden(),
  }),
});

//1
exports.createQuiz = async (quizData) => {
  const { error, value } = quizSchema.validate(quizData);
  if (error) throw new Error(error.details[0].message);
  const quiz = new Quiz({ title: value.title });
  return await quiz.save();
};

//2
exports.addQuestion = async (quizId, questionData) => {
  const { error, value } = questionSchema.validate(questionData);
  if (error) throw new Error(error.details[0].message);

  if (value.type === 'single_choice' && value.options.filter(o => o.isCorrect).length !== 1) {
    throw new Error('Single-choice questions require exactly one correct option.');
  }
  if (value.type === 'multiple_choice' && value.options.filter(o => o.isCorrect).length < 1) {
    throw new Error('Multiple-choice questions require at least one correct option.');
  }

  //req
  const question = new Question({
    quizId,
    text: value.text,
    type: value.type,
    options: value.options || [],
  });
  return await question.save();
};

//3
exports.getQuizzes = async () => {
  const quizzes = await Quiz.find().select('title').lean();
  return quizzes.filter(q => q).map(q => ({
    id: q._id.toString(),
    title: q.title || 'Untitled Quiz',
  }));
};

//4
exports.getQuizQuestions = async (quizId) => {
  const questions = await Question.find({ quizId })
  .select('text options type')
  .lean();

  return questions.map(q => ({
    id: q._id.toString(),
    text: q.text,
    type: q.type,
    options: Array.isArray(q.options) 
      ? q.options.map(o => ({ 
        //id: o._id.toString(), 
        text: o.text,
        isCorrect: o.isCorrect
      })) 
      : [],
  }));
};

//5
exports.submitAnswers = async (quizId, answers) => {
  const questions = await Question.find({ quizId });
  let score = 0;

  questions.forEach(q => {
    const submitted = answers.find(a => a.questionId === q._id.toString());
    if (!submitted) return;

    if (['single_choice', 'multiple_choice'].includes(q.type)) {
      const correctOptionIds = q.options.filter(o => o.isCorrect).map(o => o._id.toString()).sort();
      const submittedOptionIds = Array.isArray(submitted.selectedOptionIds)
        ? submitted.selectedOptionIds.map(String).sort()
        : [String(submitted.selectedOptionId)];

      if (JSON.stringify(correctOptionIds) === JSON.stringify(submittedOptionIds)) {
        score++;
      }
    } else if (q.type === 'text') {
      if (typeof submitted.textAnswer === 'string' && submitted.textAnswer.length <= 300) {
        score++;
      }
    }
  });
  
  return { score, total: questions.length };
};
