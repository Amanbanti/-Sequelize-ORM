import express from 'express';
import connectDb from './config/db.js';

const app = express();
const PORT = 5000;


const startServer = async () => {
  try {
    await connectDb();  // Ensure connection is successful
    console.log('Connected to the Db successfully');

    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Failed to connect to the Db:', error.message);
    process.exit(1);  // Exit the process if database connection fails
  }
};

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello, World! The server is running.');
});



startServer();
