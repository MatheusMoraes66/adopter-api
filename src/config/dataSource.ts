import { DataSource } from "typeorm";
import Pet from "../entity/Pet";
import Adopter from "../entity/Adopter";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database.sqlite",
  entities: [Pet, Adopter],
  synchronize: true,
});
