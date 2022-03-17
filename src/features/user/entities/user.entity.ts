import { Book } from 'src/features/book/entities/book.entity';
import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

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

  @ManyToMany(() => Book, (book) => book.users)
  @JoinTable()
  books: Book[];
}
