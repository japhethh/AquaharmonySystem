import express from "express";
import {
  loginUser,
  registerUser,
  UserList,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";
const userRouter = express.Router();
import multer from "multer";

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({storage:storage});

userRouter.post("/register", upload.single("image"), registerUser);
userRouter.post("/login", upload.single("image"), loginUser);
userRouter.get("/list", UserList);
userRouter.get("/get", authMiddleware, getUser);
userRouter.post("/updateUser", authMiddleware, updateUser);

export default userRouter;
