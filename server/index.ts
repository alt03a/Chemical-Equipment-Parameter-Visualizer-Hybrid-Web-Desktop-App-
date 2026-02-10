import express from "express";
import cors from "cors";
import { router } from "./routes";
import { sessionMiddleware } from "./auth";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(sessionMiddleware);
app.use(router);

app.listen(process.env.PORT || 5000);
