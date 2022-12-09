import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import cvRouter from "./routes/cvRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors("*"));

app.use("/cv", cvRouter);

export default app;