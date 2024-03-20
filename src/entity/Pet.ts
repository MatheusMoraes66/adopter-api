import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import PetDto from "../types/PetDto";
import Adopter from "./Adopter";
import Size from "../enum/Size";

@Entity()
export default class Pet {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  size?: Size;
  @Column()
  specie: string;
  @Column()
  dateOfBirth: Date;
  @Column()
  adopted: boolean;
  @ManyToOne(() => Adopter, (adopter) => adopter.pets)
  adopter!: Adopter;

  constructor(
    name: string,
    specie: string,
    dateOfBirth: Date,
    adopted: boolean,
    size?: Size,
  ) {
    this.name = name;
    this.adopted = adopted;
    this.specie = specie;
    this.dateOfBirth = dateOfBirth;
    this.size = size;
  }
}
