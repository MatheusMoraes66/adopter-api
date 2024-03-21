import { DataSource } from "typeorm";
import { environment } from "./enviroument";
import Pet from "../entity/Pet";
import Adopter from "../entity/Adopter";
import Address from "../entity/Address";

const env = environment();
export const AppDataSource = new DataSource({
  ...env,
  entities: [Pet, Adopter, Address],
  synchronize: true,
});
