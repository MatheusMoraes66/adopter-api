import Pet from "../../entity/Pet";
import Size from "../../enum/Size";

export default interface IPetRepository {
  create(pet: Pet): Promise<void>;
  findAll(): Promise<Array<Pet>>;
  findById(id: number): Promise<Pet>;
  update(pet: Pet): Promise<void>;
  delete(pet: Pet): Promise<void>;
  findByKey<Type extends keyof Pet>(
    key: Type,
    value: Pet[Type],
  ): Promise<Pet[]>;
}
