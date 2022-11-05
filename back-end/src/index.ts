import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routers";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);
