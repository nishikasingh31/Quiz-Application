import React from 'react';

const QuestionCard = ({ data, onAnswer, current, total }) => {
  if (!data || !data.options) return null;

  return (
    <div className="question-card">
      <p className="question-meta">Question {current} of {total}</p>
      <h2 className="question-text">{data.text}</h2> 

      <div className="options">
        {data.options.map((option, index) => (
          <button 
            // Use the _id from your JSON for a unique key
            key={index} 
            className="option-btn"
            // Ensure this matches the 'isCorrect' property in your JSON
            onClick={() => onAnswer(option.isCorrect)} 
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;