import { Sequelize } from 'sequelize';

// Set up the Sequelize instance with database details
const sequelize = new Sequelize('proshop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Function to authenticate and connect to the database
const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    throw err;  
  }
};


export default connectDb;
