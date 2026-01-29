import express from "express"
import cors from "cors"

const app = express();

app.use(
  cors({
      origin: process.env.APP_URL || "http://localhost:3000",
      credentials:true
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