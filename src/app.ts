import express, { Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import router from "./router";
import "reflect-metadata";

import { AppDataSource } from "./config/dataSource";
import Logger from "./utils/logger";
const logger = new Logger();
const app = express();
app.use(express.json());
router(app);

AppDataSource.initialize()
  .then(() => logger.info("Banco de dados conectado."))
  .catch((err) => logger.error(`Error: ${err}`));

app.get("/", (_, res: Response) => {
  res.status(200).json({ message: "Bem vindo ao curso de TypeScript!" });
});

export default app;
