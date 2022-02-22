import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Index(['email', 'phoneNumber'], { unique: true })
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
