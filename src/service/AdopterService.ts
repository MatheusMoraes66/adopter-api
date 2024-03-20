import Address from "../entity/Address";
import Adopter from "../entity/Adopter";
import StatusCode from "../enum/StatusCode";
import AdopterRepository from "../repository/AdopterRepository";
import AdopterDto from "../types/AdopterDto";
import ResponseDto from "../types/ResponseDto";
import Logger from "../utils/logger";

export default class AdopterService {
  private adopterRepository;
  private logger = new Logger();
  constructor() {
    this.adopterRepository = new AdopterRepository();
  }

  async create(adopterDto: any): Promise<ResponseDto> {
    try {
      const { name, phone, password } = adopterDto;

      const newAdopter = new Adopter(name, password, phone);

      this.logger.debug(JSON.stringify(newAdopter));

      this.adopterRepository.create(newAdopter);

      return {
        status: StatusCode.CREATED,
        message: "Sucesso ao criar uma adoção.",
        data: [],
      };
    } catch (err) {
      this.logger.error(err);
      return {
        status: StatusCode.SERVER_ERROR,
        message: "Erro ao criar uma adotante.",
        data: [],
      };
    }
  }

  async list(): Promise<ResponseDto> {
    try {
      const adopter = await this.adopterRepository.list();

      this.logger.debug(`Registros encotrados ${adopter.length}`);

      return {
        status: StatusCode.SUCCESS,
        message: "Sucesso ao buscar uma adotantes.",
        data: adopter,
      };
    } catch (err) {
      this.logger.error(err);
      return {
        status: StatusCode.SERVER_ERROR,
        message: "Erro ao buscar uma adotantes.",
        data: [],
      };
    }
  }

  async find(id: number): Promise<ResponseDto> {
    try {
      const adopter: Adopter = await this.adopterRepository.findById(id);

      if (!adopter) {
        this.logger.warn(`Não encontrado um adotante com o id ${id}.`);
        return {
          status: StatusCode.NOT_FOUND,
          message: `Não encontrado um adotante com o id ${id}.`,
          data: [],
        };
      }

      return {
        status: StatusCode.SUCCESS,
        message: `Sucesso ao encontrar o adotante com o id ${id}.`,
        data: adopter,
      };
    } catch (err) {
      this.logger.error(err);
      return {
        status: StatusCode.SERVER_ERROR,
        message: "Erro ao buscar um adotante especifico.",
        data: [],
      };
    }
  }

  async update(id: number, newAdopter: AdopterDto): Promise<ResponseDto> {
    try {
      const adopter: Adopter = await this.adopterRepository.findById(id);

      if (!adopter) {
        this.logger.warn(`Não encontrado um adotante com o id ${id}.`);
        return {
          status: StatusCode.NOT_FOUND,
          message: `Não encontrado um adotante com o id ${id}.`,
          data: [],
        };
      }

      const { name, password, phone, photo, address } = newAdopter;

      adopter.name = name;
      adopter.password = password;
      adopter.phone = phone;
      adopter.photo = photo;
      if (address) {
        const newAddress = new Address(address.city, address.state);
        adopter.address = newAddress;
      }

      this.logger.debug(JSON.stringify(adopter));

      await this.adopterRepository.update(adopter);

      return {
        status: StatusCode.SUCCESS,
        message: "Sucesso ao atualizar um adotante.",
        data: [],
      };
    } catch (err) {
      this.logger.error(err);
      return {
        status: StatusCode.SERVER_ERROR,
        message: "Erro ao atualizar um adotante.",
        data: [],
      };
    }
  }

  async delete(id: number): Promise<ResponseDto> {
    try {
      const adopter = await this.adopterRepository.findById(id);

      if (!adopter) {
        this.logger.warn(`Não encontrado um adotante com o id ${id}.`);
        return {
          status: StatusCode.NOT_FOUND,
          message: `Não encontrado um adotante com o id ${id}.`,
          data: [],
        };
      }

      this.logger.debug(JSON.stringify(adopter));

      await this.adopterRepository.delete(adopter);

      return {
        status: StatusCode.SUCCESS,
        message: `Sucesso ao deletar o adotante.`,
        data: [],
      };
    } catch (err) {
      this.logger.error(err);
      return {
        status: StatusCode.SERVER_ERROR,
        message: "Erro ao deletar o adotante.",
        data: [],
      };
    }
  }
}
