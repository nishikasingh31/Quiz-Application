import React , {useState} from 'react';
import QuizList from './components/QuizList';
import QuizContainer from './components/QuizContainer';
import './App.css';

function App() {
  const [activeQuizId, setActiveQuizId] = useState(null);
  
  return (
    <div className="App">
      {!activeQuizId ? (
        <QuizList onSelectQuiz={(id) => setActiveQuizId(id)} />
      ) : (
        <QuizContainer 
          quizId={activeQuizId} 
          onBack={() => setActiveQuizId(null)} 
        />
      )}
    </div>
  );
}

export default App;