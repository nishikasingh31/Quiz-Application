# Quiz Application (MERN Stack)

This project is a full-stack Quiz Application built using the MERN stack (MongoDB, Express, React, Node.js) that enables users to participate in interactive quizzes and receive instant performance feedback.

The application is designed to simulate real-world online testing platforms, where quizzes can be dynamically created, questions can be added, and users can attempt them in a structured way. It focuses on providing a smooth user experience along with efficient backend processing for answer evaluation.

Users can select a quiz, navigate through multiple questions, and submit their responses. The system then evaluates the answers and generates a score instantly, making it useful for learning, self-assessment, and practice.

The backend exposes a set of RESTful APIs to handle quiz creation, question management, and answer submission, while the frontend provides an intuitive interface for interacting with the system.

## 🚀 Features

🎯 Multiple quiz categories
❓ Dynamic questions rendering
✅ Multiple choice questions
📊 Score calculation and result display
🔄 Navigate between questions
🌐 Full-stack integration (Frontend + Backend)
⚡ Responsive UI

## 🛠️ Tech Stack
- Frontend-> React.js, CSS
- Backend -> Node.js, Express.js
- Database -> MongoDB

## 🌐 API Endpoints
📌 Quiz Management
| Method	| Endpoint  |	Description |
|---------|-----------|-------------|
| POST	| /api/quizzes |	Create a new quiz |
| GET |	/api/quizzes	| Get all quizzes |

❓ Question Management
| Method	| Endpoint  |	Description |
|---------|-----------|-------------|
| POST	| /api/quizzes/:quizId/questions	| Add a question to a quiz |
| GET	| /api/quizzes/:quizId/questions	| Get all questions of a quiz |

📝 Quiz Submission
| Method	| Endpoint  |	Description |
|---------|-----------|-------------|
| POST	| /api/quizzes/:quizId/submit	| Submit answers and calculate score |

## ⚙️ Controller Logic (Overview)
- createQuiz → Creates a new quiz and stores it in the database.
- addQuestion → Adds a question to a specific quiz using quizId.
- getQuizzes → Fetches all available quizzes.
- getQuizQuestions → Retrieves all questions for a selected quiz.
- submitAnswers → Compares user answers with correct ones and calculates the final score.

## 🔄 Flow
User selects a quiz
Questions are fetched from backend
User submits answers
Backend evaluates and returns score

## 🔄 Flow of Data

1. Frontend (React)
Handles user interface and interactions
Sends API requests (fetch/axios) to the backend

2. Backend (Node.js + Express)
Receives client requests via REST APIs
Processes logic using controllers
Interacts with the database

3. Database (MongoDB)
Stores quizzes, questions, and answers
Returns data to the backend when requested

4. Response Flow
Backend sends processed data (questions/score)
Frontend displays results to the user

## 🧪 Getting Started
1. Clone the Repository
```bash
git clone https://github.com/nishikasingh31/Quiz-Application.git
cd Quiz-Application
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```
Create a .env file and add:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Run backend:
```bash
npm start
```
3. Install Frontend Dependencies
```bash
cd frontend
npm install
npm start
```
## 🚀 Deployment
Backend (Render)
-> Create a Web Service on Render
-> Add environment variable MONGODB_URI
-> Deploy
Frontend (Netlify)
-> Build command: npm run build
-> Publish directory: build

