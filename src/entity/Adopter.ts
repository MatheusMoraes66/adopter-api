import {
  Column,
  JoinTable,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./Address";
import Pet from "./Pet";

export default class Adopter {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  phone: string;
  @Column({ nullable: true })
  photo?: string;
  @OneToOne(() => Address, {
    nullable: true,
    eager: true,
    cascade: true,
  })
  @JoinTable()
  address?: Address;
  @OneToMany(() => Pet, (pet) => pet.adopted)
  pets!: Pet[];

  constructor(
    name: string,
    password: string,
    phone: string,
    photo?: string,
    address?: Address,
  ) {
    this.name = name;
    this.password = password;
    this.photo = photo;
    this.phone = phone;
    this.address = address;
  }
}
