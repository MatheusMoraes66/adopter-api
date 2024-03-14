import { Column, PrimaryGeneratedColumn } from "typeorm";

export default class Address {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  city: string;
  @Column()
  state: string;

  constructor(city: string, state: string) {
    this.city = city;
    this.state = state;
  }
}
