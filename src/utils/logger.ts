import LogLevel from "../enum/LogLevel";
import moment from "moment-timezone";
export default class Logger {
  info(message: string) {
    const timezone = moment.tz("America/Sao_Paulo");
    const timestamp = timezone.format("DD/MM/YYYY HH:mm:ss");
    let template = `[${timestamp}][${LogLevel.INFO}]: ${message}`;

    console.log(template);
  }

  warn(message: string) {
    const timezone = moment.tz("America/Sao_Paulo");
    const timestamp = timezone.format("DD/MM/YYYY HH:mm:ss");
    let template = `[${timestamp}][${LogLevel.WARN}]: ${message}`;

    console.log(template);
  }

  error(message: string) {
    const timezone = moment.tz("America/Sao_Paulo");
    const timestamp = timezone.format("DD/MM/YYYY HH:mm:ss");
    let template = `[${timestamp}][${LogLevel.ERROR}]: ${message}`;

    console.log(template);
  }

  debug(message: string) {
    const timezone = moment.tz("America/Sao_Paulo");
    const timestamp = timezone.format("DD/MM/YYYY HH:mm:ss");
    let template = `[${timestamp}][${LogLevel.DEBUG}]: ${message}`;
    if (process.env.MODE === "development") {
      console.log(template);
    }
  }
}
