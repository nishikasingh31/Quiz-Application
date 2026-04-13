import React, { useState, useEffect } from 'react';
import { getAllQuizzes } from '../services/api';

const QuizList = ({ onSelectQuiz }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getAllQuizzes().then(data => setQuizzes(data));
  }, []);

  return (
  <div className="app-wrapper">
    <h1>Quiz App</h1>
    
    <div className="quiz-container">
      {quizzes.map((quiz) => (
        <div key={quiz.id} className="quiz-section">
          <div className="quiz-card">
            <h3>{quiz.title}</h3>
            <button onClick={() => onSelectQuiz(quiz.id)}>Start Quiz</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default QuizList
