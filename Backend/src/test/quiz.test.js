const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = require('../../app'); 
const Quiz = require('../models/Quiz');
const Question = require('../models/Question');

let mongoServer; //will store in-memory MongoDB

//start db before all tests
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create(); // New in-memory MongoDB
  const uri = mongoServer.getUri(); // Get connection string
  await mongoose.connect(uri);
});

//stop n clean up after all tests
afterAll(async () => {
  await mongoose.disconnect(); //close Mongoose connection
  await mongoServer.stop();    //stop in-memory MongoDB
});

//clean up db btwn each test
afterEach(async () => {
  await Quiz.deleteMany({});
  await Question.deleteMany({});
});

describe('Quiz API', () => {
  it('creates a quiz, adds a question & submits answers', async () => {

    //create quiz 1
    const createQuiz = await request(app)
      .post('/api/quizzes')
      .send({ title: 'Test Quiz' })
      .expect(201);
    const quizId = createQuiz.body._id || createQuiz.body.id;

    //add 
    const questionPayload = {
      text: 'What is 2+2?',
      type: 'single_choice',
      options: [
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: true }
      ]
    };

    const addQ = await request(app)
      .post(`/api/quizzes/${quizId}/questions`)
      .send(questionPayload)
      .expect(201);

    const questionId = addQ.body._id || addQ.body.id;

    //get all q.
    const getQ = await request(app)
      .get(`/api/quizzes/${quizId}/questions`)
      .expect(200);

    //submit ans
    const submitPayload = {
      answers: [
        {
          questionId,
          selectedOptionId: getQ.body[0].options[1]._id || getQ.body[0].options[1].id
        }
      ]
    };

    const submitRes = await request(app)
      .post(`/api/quizzes/${quizId}/submit`)
      .send(submitPayload)
      .expect(200);

    //checks
    expect(submitRes.body).toHaveProperty('score');
    expect(submitRes.body).toHaveProperty('total');
  });
});
