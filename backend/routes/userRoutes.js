import express from "express";
import {
  
    registerUser,
    
    } from '../controllers/userController.js'

// import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post('/',registerUser);



export default router;