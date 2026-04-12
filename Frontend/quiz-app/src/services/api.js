const API_BASE_URL = 'https://online-quiz-application-yffb.onrender.com/api';

// Fetch all available quizzes for the Menu
export const getAllQuizzes = async () => {
  const response = await fetch(`${API_BASE_URL}/quizzes`);
  return await response.json();
};

// Fetch questions for a SPECIFIC quiz ID
export const getQuestionsByQuizId = async (quizId) => {
  const response = await fetch(`${API_BASE_URL}/quizzes/${quizId}/questions`);
  if (!response.ok) throw new Error('Failed to fetch questions');
  return await response.json();
};
