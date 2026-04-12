const express = require('express');
const quizRoutes = require('./src/routes/quizRoutes');
const cors = require('cors');

const app = express();

app.use(cors()); // Allows your React frontend to connect
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

app.use(cors({
  origin: "https://nishika-singh-quiz-application.netlify.app/"
}));

// Routes
app.use('/api', quizRoutes);

// Health Check / Home Route
app.get('/', (req, res) => {
  res.status(200).send('Quiz API is running smoothly.');
});

app.get('/api/test', (req, res) => {
  res.json({ message: "The /api prefix is working!" });
});
// 404 Error Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;


