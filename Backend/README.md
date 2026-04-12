This Online Quiz API is a backend service built using Node.js and MongoDB for creating and managing quizzes. It supports different types of questions, including single choice, multiple choice, and text-based answers. The API allows users to create quizzes, add questions, submit answers to get a score. Data validation is handled by Joi to ensure only valid quizzes and questions are saved.

**API Testing Demo (Postman)**
https://www.loom.com/share/c5806f44efaa4b4c98c887f5ab676ae1?sid=21f48f69-49ea-476e-9b37-7caa17164ea8

## 1. Prerequisites: <br>
- **Node.js (v14 or newer)** <br>
- **MongoDB (local or remote)** <br>

## 2. Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Validation:** Joi
- **Testing:** Jest (unit tests for scoring logic)
- **API Testing:** Postman

## 3. Installation
Clone the repository
- `git clone https://github.com/nishikasingh31/Online-Quiz-API.git`
- `cd Online-Quiz-API`

## 4. Install Dependencies
- `npm install`

## 5. Set up environment variables
Create a .env file in the project root.
Example:
- `PORT=3000`
-  `MONGO_URI=your_mongodb_connection_string`

## 6. Running the Project
Start the server in development mode:
- `npm run dev`
Or start normally:
-`npm start`

## 7. Example Request/Response <br>
[Postman API.pdf](https://github.com/user-attachments/files/22627398/Postman.API.pdf)

## 8. API Endpoints<br>
Quiz Management<br>
- `POST /api/quizzes` - Create a quiz
- `POST /api/quizzes/:quizId/questions` - Add questions to a quiz
- `GET /api/quizzes` - List all quizzes
Quiz Taking<br>
- `GET /api/quizzes/:quizId/questions` - Get questions for a quiz
- `POST /api/quizzes/:quizId/submit` - Submit answers and receive score

## 9. Running Test Cases<br>
- Install dependencies with npm install. <br>
`npm install jest` <br>
- If you have test scripts set up, run the tests using: <br>
`npm test` <br>
- Make sure your package.json includes a test script like: <br>
`"scripts": {
  "test": "jest"
} `

