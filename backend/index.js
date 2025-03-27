import dotenv from "dotenv";
dotenv.config();

import dbConnect from "./src/db/mongodb.js";
import express from "express";
import cors from "cors";
import taskRouter from "./src/routers/task.router.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://algoroot-assignment-anish.vercel.app",
    ],
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

app.use("/api/v1/task", taskRouter);

const port = process.env.PORT || 5000;

dbConnect()
  .then(
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    })
  )
  .catch((error) => {
    console.log("MongoDB Connection Error", error);
  });
