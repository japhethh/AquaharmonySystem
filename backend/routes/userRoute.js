import express from "express";
import { loginUser, registerUser,UserList,getUser } from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/list",UserList)
userRouter.get("/get",authMiddleware,getUser)

export default userRouter;
