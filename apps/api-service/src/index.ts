import express from "express";
import authRouter from "./routes/auth.route";

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Service listening on port ${PORT}`);
});
