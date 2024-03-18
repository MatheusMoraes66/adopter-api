import { DataSource } from "typeorm";
import Pet from "../entity/Pet";
import Adopter from "../entity/Adopter";
import Address from "../entity/Address";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database.sqlite",
  entities: [Pet, Adopter, Address],
  synchronize: true,
});
