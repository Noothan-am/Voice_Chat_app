import express from "express";
import controllers from "./controllers/authController.js";
const router = express.Router();

// we are getting callback functions from controllers folder
router.post("/auth", controllers.auth)




export default router;