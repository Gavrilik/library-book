import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Index({ unique: true })
  @Column({ nullable: false })
  email: string;

  @Index({ unique: true })
  @Column()
  phoneNumber: number;

  @Column()
  age: number;

  @Column({ nullable: false })
  password: string;
}
