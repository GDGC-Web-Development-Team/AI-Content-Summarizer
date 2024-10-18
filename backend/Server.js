import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import summarizeRoutes from "./routes/summarize.js";
import { connectDb } from "./db.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", summarizeRoutes);
app.use("/user", userRouter);

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running at port : ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => {
    console.error("MONGO db connection failed:", err);
  });
