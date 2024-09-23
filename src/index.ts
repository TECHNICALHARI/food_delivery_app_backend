import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./components/db/ConnectDb";
import userRoute from "./routes/user.route";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  ConnectDb();
  console.log(`App is running on port ${PORT}`);
});
