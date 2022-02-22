import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  phoneNumber: number;

  @Column()
  age: number;

  @Column({ nullable: false })
  password: string;
}
