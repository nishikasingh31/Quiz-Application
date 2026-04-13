import React, { useState, useEffect } from 'react';
import { getQuestionsByQuizId } from '../services/api'; // Ensure this import is correct
import QuestionCard from './QuestionCard';
import ScoreBoard from './ScoreBoard';

// 1. You MUST put { quizId, onBack } in the brackets here
const QuizContainer = ({ quizId, onBack }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    // 2. You MUST pass quizId into the function here
    if (quizId) {
      getQuestionsByQuizId(quizId)
        .then((data) => {
          if (Array.isArray(data)) {
            setQuestions(data);
          }
        })
        .catch((err) => console.error("Fetch Error:", err));
    }
  }, [quizId]); // 3. This tells React: "If quizId changes, run this again"

  const handleAnswer = (isCorrect) => {
    if (isCorrect === true || String(isCorrect).toLowerCase() === "true") {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (questions.length === 0) return <h2>Loading Questions...</h2>;

  return (
    <div className="quiz-page">
      {/* 4. Optional: A button to go back to the list */}
      <button onClick={onBack} className="back-btn">⬅ Back to Quizzes</button>
      
      {showScore ? (
        <ScoreBoard score={score} total={questions.length} />
      ) : (
        <QuestionCard
          data={questions[currentIndex]}
          onAnswer={handleAnswer}
          current={currentIndex + 1}
          total={questions.length}
        />
      )}
    </div>
  );
};

export default QuizContainer;
