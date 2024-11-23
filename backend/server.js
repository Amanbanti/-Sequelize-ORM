// Import Sequelize
import { Sequelize } from 'sequelize';

// Database connection details
const database = 'your_database_name';
const username = 'your_username';
const password = 'your_password';
const host = 'localhost'; // Change this to your database host if needed
const dialect = 'mysql'; // Change this to the appropriate database dialect (e.g., 'postgres', 'sqlite', etc.)

// Initialize Sequelize
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;
