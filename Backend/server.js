require('dotenv').config();
const app = require('./app');
const connectDB = require('./src/database/db');

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await connectDB(); 
    console.log('✅ Database connected successfully');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
