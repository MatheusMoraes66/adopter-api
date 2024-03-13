import { Column, PrimaryGeneratedColumn } from "typeorm";

export default class Adopter {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  phone: string;
  @Column()
  photo: string;
  @Column()
  address: string;

  constructor(
    name: string,
    password: string,
    phone: string,
    photo: string,
    address: string,
  ) {
    this.name = name;
    this.password = password;
    this.photo = photo;
    this.phone = phone;
    this.address = address;
  }
}
