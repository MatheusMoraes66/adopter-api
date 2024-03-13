import Adopter from "../entity/Adopter";
import StatusCode from "../enum/StatusCode";
import AdopterRepository from "../repository/AdopterRepository";
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
      const { name, phone, addres, photo, password } = adopterDto;

      const newAdopter = new Adopter(name, password, phone, photo, addres);

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
        message: "Erro ao criar uma adoção.",
        data: [],
      };
    }
  }
}
