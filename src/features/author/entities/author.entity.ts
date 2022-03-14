import { Book } from 'src/features/book/entities/book.entity';
import { Genre } from 'src/features/genre/entities/genre.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];

  @ManyToMany(() => Genre, (genre) => genre.authors, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  genres: Genre[];
}
