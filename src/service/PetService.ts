import Pet from "../entity/Pet";
import StatusCode from "../enum/StatusCode";
import PetRepository from "../repository/PetRepository";
import PetDto from "../types/PetDto";
import ResponseDto from "../types/ResponseDto";
import Logger from "../utils/logger";

export default class PetService {
  private petRepository;
  private logger = new Logger();

  constructor() {
    this.petRepository = new PetRepository();
  }

  async create(petDto: PetDto): Promise<ResponseDto> {
    try {
      const newPet = new Pet(
        petDto.name,
        petDto.specie,
        petDto.dateOfBirth,
        petDto.adopted,
      );
      this.logger.debug(JSON.stringify(newPet));
      await this.petRepository.create(newPet);
      return {
        status: StatusCode.CREATED,
        message: "Sucesso ao criar Pet.",
        data: [],
      };
    } catch (err) {
      this.logger.error(err);
      return {
        status: StatusCode.SERVER_ERROR,
        message: "Erro na operação de criação de Pet.",
        data: [],
      };
    }
  }

  async find(): Promise<ResponseDto> {
    try {
      const pets = await this.petRepository.findAll();
      this.logger.debug(`Quantidade de registros ${pets.length}.`);
      return {
        status: StatusCode.SUCCESS,
        message: "Sucesso na busca pelos Pets.",
        data: pets,
      };
    } catch (err) {
      this.logger.debug(err);
      return {
        status: StatusCode.SERVER_ERROR,
        message: "Erro na operação de criação de Pet.",
        data: [],
      };
    }
  }

  async update(id: number, petDto: PetDto): Promise<ResponseDto> {
    try {
      const pet: Pet = await this.petRepository.findById(Number(id));

      if (!pet) {
        this.logger.warn(`Não encontrado o Pet com o id ${id}.`);
        return {
          status: StatusCode.NOT_FOUND,
          message: `Não encontrado o Pet com o id ${id}.`,
          data: [],
        };
      }

      const { name, adopted, dateOfBirth, specie } = petDto;

      pet.name = name;
      pet.adopted = adopted;
      pet.dateOfBirth = dateOfBirth;
      pet.specie = specie;

      this.logger.debug(JSON.stringify(pet));

      await this.petRepository.update(pet);

      return {
        status: StatusCode.SUCCESS,
        message: "Sucesso ao atualizar o Pets.",
        data: [],
      };
    } catch (err) {
      this.logger.debug(err);
      return {
        status: StatusCode.SERVER_ERROR,
        message: "Erro na operação de atualizar um Pets.",
        data: [],
      };
    }
  }

  async delete(id: number): Promise<ResponseDto> {
    try {
      const pet: Pet = await this.petRepository.findById(Number(id));
      if (!pet) {
        this.logger.warn(`Não encontrado o Pet com o id ${id}.`);
        return {
          status: StatusCode.NOT_FOUND,
          message: `Não encontrado o Pet com o id ${id}.`,
          data: [],
        };
      }
      await this.petRepository.delete(pet);
      return {
        status: StatusCode.SUCCESS,
        message: "Sucesso deletado o Pet.",
        data: [],
      };
    } catch (err) {
      this.logger.debug(err);
      return {
        status: StatusCode.SERVER_ERROR,
        message: "Erro na operação de deletar um Pets.",
        data: [],
      };
    }
  }
}
