import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import PetDto from "../types/PetDto";
import Adopter from "./Adopter";

@Entity()
export default class Pet {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name: string;
  @Column()
  specie: string;
  @Column()
  dateOfBirth: Date;
  @Column()
  adopted: boolean;
  // @ManyToOne(() => Adopter, (adopter) => adopter.id)
  // adopter!: Adopter;

  constructor(
    name: string,
    specie: string,
    dateOfBirth: Date,
    adopted: boolean,
  ) {
    this.name = name;
    this.adopted = adopted;
    this.specie = specie;
    this.dateOfBirth = dateOfBirth;
  }
}
