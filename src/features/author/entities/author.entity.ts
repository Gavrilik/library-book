import { Book } from 'src/features/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  dateOfBirth: number;

  @Column()
  genre: string;

  @OneToMany(() => Book, (book) => book.author)
  book: Book[];
}
