import express from 'express';
import { connectDb, sequelize } from './config/db.js'; 
import userRoute from './routes/userRoutes.js';

const app = express();
const PORT = 5000;

const startServer = async () => {
  try {
    
    await connectDb();
    console.log('Connected to the Db successfully');

    // Synchronize Sequelize models with the database
    await sequelize.sync({ alter: true }); // Adjust `alter` or `force` based on your requirements
    console.log('All models were synchronized successfully.');

    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Failed to connect to the Db:', error.message);
    process.exit(1); 
  }
};

// Body parser middleware
app.use(express.json());


app.use('/api/users', userRoute);


app.get('/', (req, res) => {
  res.send('Hello, World! The server is running.');
});

startServer();
