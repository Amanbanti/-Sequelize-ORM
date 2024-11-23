import { Sequelize, DataTypes } from 'sequelize';
import sequelizeDb from '../config/db.js'


const User = sequelizeDb.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
      validate: {
        isEmail: true, 
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, 
    },
  },
  {
    timestamps: true, 
  }
);


export default User;
