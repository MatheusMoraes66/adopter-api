import app from "./src/app.js";
import Logger from "./src/utils/logger.js";
import "dotenv/config";

const PORTA = process.env.PORT || 3000;
const logger = new Logger();

app.listen(PORTA, () => {
  logger.info(`Servidor executando`);
});
