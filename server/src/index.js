import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import UserRouter from "./routes/user.js";

const PORT = 8000;
const app = express();

app.use(cors()); // Aceitar requisições externas (GERAL)
app.use(bodyParser.json()); // Interpretar entradas JSON (dados)

app.use("/user", UserRouter);

app.listen(PORT, () => console.log("Listenner: localhost:"+PORT));
