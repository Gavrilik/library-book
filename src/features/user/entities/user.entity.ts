import { Book } from 'src/features/book/entities/book.entity';
import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  OneToMany,
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

  @OneToMany(() => Book, (book) => book.user)
  books: Book[];
}
