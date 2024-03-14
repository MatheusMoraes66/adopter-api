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
    this.logger.info(`(${req.method}) :: Criando um novo adotante.`);
    const adopterDto = req.body as AdopterDto;

    const { status, message, data } =
      await this.adopterService.create(adopterDto);

    this.logger.info(`(${req.method}) :: ${message}`);

    return res.status(status).json({
      message: message,
      data: data,
    });
  }

  async listAdopter(req: Request, res: Response) {
    this.logger.info(`(${req.method}) :: Buscando adotantes cadastrados.`);

    const { status, data, message } = await this.adopterService.list();

    this.logger.info(`(${req.method}) :: ${message}`);

    return res.status(status).json({
      data: data,
    });
  }

  async updateAdopter(req: Request, res: Response) {
    this.logger.info(`(${req.method}) :: Atualizando um adotante.`);
    const { id } = req.params;

    const adopterDto = req.body as AdopterDto;

    const { status, message, data } = await this.adopterService.update(
      Number(id),
      adopterDto,
    );

    this.logger.info(`(${req.method}) :: ${message}`);

    return res.status(status).json({
      message: message,
      data: data,
    });
  }

  async deleteAdopter(req: Request, res: Response) {
    this.logger.info(`(${req.method}) :: Deletando um adotante.`);

    const { id } = req.params;

    const { status, message, data } = await this.adopterService.delete(
      Number(id),
    );

    return res.status(status).json({
      message: message,
      data: data,
    });
  }
}
