import express from "express";
import { loginUser, registerUser,UserList } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/list",UserList)

export default userRouter;
