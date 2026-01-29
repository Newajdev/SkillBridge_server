import express from "express"
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(
    cors({
        origin: process.env.APP_URL || "http://localhost:3000",
        credentials: true
    }),
);

app.use(express.json())




app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Prisma Server is Running ... ... ..."
    })
})

export default app;