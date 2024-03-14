import Adopter from "../../entity/Adopter";

export default interface IAdopterRepository {
  create(adopter: Adopter): Promise<void>;
  list(): Promise<Adopter[]>;
  findById(id: number): Promise<Adopter>;
  update(adopter: Adopter): Promise<void>;
  delete(adopter: Adopter): Promise<void>;
}
