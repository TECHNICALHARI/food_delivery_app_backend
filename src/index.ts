import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./components/db/ConnectDb";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    ConnectDb();
  console.log(`App is running on port ${PORT}`);
});
