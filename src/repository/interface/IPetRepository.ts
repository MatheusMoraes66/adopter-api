import Pet from "../../entity/Pet";

export default interface IPetRepository {
  create(pet: Pet): Promise<void>;
  findAll(): Promise<Array<Pet>>;
  findById(id: number): Promise<Pet>;
  update(pet: Pet): Promise<void>;
  delete(pet: Pet): Promise<void>;
}
