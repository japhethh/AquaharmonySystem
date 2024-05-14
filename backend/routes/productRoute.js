import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

//Image Storage engine
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

productRouter.post("/add", upload.single("image"), addFood);
productRouter.get("/list", listFood);
productRouter.post("/remove", removeFood);

export default productRouter;
