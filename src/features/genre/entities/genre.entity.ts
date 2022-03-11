import { Author } from 'src/features/author/entities/author.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  genre: string;

  @ManyToMany(() => Author, (author) => author.genres)
  @JoinTable()
  authors: Author[];
}
