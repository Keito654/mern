import express from "express";
import userRoute from "./routes/users";

const app = express();
const PORT = 8000;

// ミドルウェア
app.use("/api/users", userRoute);

app.listen(PORT, () => console.log("サーバーが起動しました。"));
