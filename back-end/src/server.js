import express from "express";
import { routes } from "./routes/index";
import { initializeDbConnection } from "./db";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();


const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5173" }));

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

initializeDbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
