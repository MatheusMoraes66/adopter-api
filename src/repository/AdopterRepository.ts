import { Repository } from "typeorm";
import { AppDataSource } from "../config/dataSource";
import Adopter from "../entity/Adopter";
import IAdopterRepository from "./interface/IAdopterRepository";

export default class AdopterRepository implements IAdopterRepository {
  private repository: Repository<Adopter>;

  constructor() {
    this.repository = AppDataSource.getRepository(Adopter);
  }

  async create(adopter: Adopter): Promise<void> {
    await this.repository.save(adopter);
  }

  async list(): Promise<Adopter[]> {
    return await this.repository.find();
  }

  async update(adopter: Adopter): Promise<void> {
    await this.repository.save(adopter);
  }

  async delete(adopter: Adopter): Promise<void> {
    await this.repository.remove(adopter);
  }
}
