import { Request, Response } from "express";

import AdopterService from "../service/AdopterService";
import AdopterDto from "../types/AdopterDto";
import Logger from "../utils/logger";

export default class AdopterControllers {
  private adopterService;
  private logger = new Logger();
  constructor() {
    this.adopterService = new AdopterService();
  }

  async createAdopter(req: Request, res: Response) {
    this.logger.info(`(${req.method}) :: Criando uma nova Adoção.`);
    const adopterDto = req.body as AdopterDto;

    const { status, message } = await this.adopterService.create(adopterDto);

    this.logger.info(`(${req.method}) :: ${message}`);

    return res.status(status).json({
      message: message,
    });
  }
}
