import { Request, Response } from "express";

import Species from "../enum/Species";
import StatusCode from "../enum/StatusCode";
import Pet from "../entity/Pet";
import PetDto from "../types/PetDto";
import Logger from "../utils/logger";
import PetService from "../service/PetService";
import Size from "../enum/Size";

export default class PetControllers {
  private petService;
  private logger = new Logger();

  constructor() {
    this.petService = new PetService();
  }

  async createPet(req: Request, res: Response) {
    this.logger.info(`(${req.method}) :: Criando um novo Pet.`);
    const petDto = req.body as PetDto;

    if (!Object.values(Species).includes(petDto.specie)) {
      return res
        .status(StatusCode.NOT_FOUND)
        .json({ error: "Essa especie não existe" });
    }

    if (petDto.size && !(petDto.size in Size)) {
      return res
        .status(StatusCode.NOT_FOUND)
        .json({ error: "Essa tamanho não existe" });
    }

    const { status, message } = await this.petService.create(petDto);
    this.logger.info(`(${req.method}) :: ${message}`);
    return res.status(status).json({
      message: message,
    });
  }

  async getPet(req: Request, res: Response) {
    this.logger.info(`(${req.method}) :: Buscando Pets cadastrados.`);

    const { status, data, message } = await this.petService.list();

    this.logger.info(`(${req.method}) :: ${message}`);

    return res.status(status).json(data);
  }

  async search(req: Request, res: Response) {
    this.logger.info(`(${req.method}) :: Buscando Pets cadastrados.`);

    const { column, value } = req.query;

    this.logger.debug(
      `Parametro passado { key: '${column}', value: '${value}'}`,
    );

    if (!column && !value) {
      return res
        .status(StatusCode.NOT_FOUND)
        .json({ error: "Coloque a coluna e o valor para buscar o Pet" });
    }

    const { status, data, message } = await this.petService.findBykey(
      column as string,
      value as string,
    );

    this.logger.info(`(${req.method}) :: ${message}`);

    return res.status(status).json(data);
  }

  async updatePet(req: Request, res: Response) {
    const { id } = req.params;
    this.logger.info(`(${req.method}) :: Atualizando o Pet com id ${id}.`);
    const petDto = req.body as PetDto;

    if (!Object.values(Species).includes(petDto.specie)) {
      this.logger.info(`(${req.method}) :: A especie passada não existe.`);
      return res
        .status(StatusCode.BAD_REQUEST)
        .json({ error: "A especie passada não existe." });
    }

    const { message, status } = await this.petService.update(
      Number(id),
      petDto,
    );

    this.logger.info(`(${req.method}) :: ${message}`);

    return res.status(status).json({
      message: message,
    });
  }

  async deletePet(req: Request, res: Response) {
    const { id } = req.params;
    this.logger.info(`(${req.method}) :: Deletando o Pet com id ${id}.`);

    const { status, message } = await this.petService.delete(Number(id));

    this.logger.info(`(${req.method}) :: ${message}`);
    return res.status(status).json({ message });
  }

  async adoptPet(req: Request, res: Response) {
    const { id_adopter, id_pet } = req.params;
    this.logger.info(`(${req.method}) :: Começando processo de adoção.`);

    const { status, message } = await this.petService.adopt(
      Number(id_adopter),
      Number(id_pet),
    );

    this.logger.info(`(${req.method}) :: ${message}`);
    return res.status(status).json({ message });
  }
}
