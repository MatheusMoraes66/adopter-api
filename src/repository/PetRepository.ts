import { Repository } from "typeorm";
import { AppDataSource } from "../config/dataSource";
import Pet from "../entity/Pet";
import IPetRepository from "./interface/IPetRepository";

export default class PetRepository implements IPetRepository {
  private repository: Repository<Pet>;

  constructor() {
    this.repository = AppDataSource.getRepository(Pet);
  }

  public async findAll(): Promise<Pet[]> {
    return this.repository.find();
  }

  public async create(pet: Pet): Promise<void> {
    this.repository.save(pet);
  }

  public async update(petData: Partial<Pet>): Promise<void> {
    await this.repository.save(petData);
  }

  public async delete(petData: Pet): Promise<void> {
    await this.repository.remove(petData);
  }

  public async findById(id: number): Promise<Pet> {
    const pet = await this.repository.findOne({
      where: {
        id: id,
      },
    });
    return pet;
  }
}
