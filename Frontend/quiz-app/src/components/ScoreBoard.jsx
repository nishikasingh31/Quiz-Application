import React from 'react';

const ScoreBoard = ({ score, total }) => {
  return (
    <div className="scoreboard">
      <h2>Quiz Completed!</h2>
      <p>Your Final Score: <strong>{score} / {total}</strong></p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default ScoreBoard;