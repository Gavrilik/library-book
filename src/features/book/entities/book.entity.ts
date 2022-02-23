import { Author } from 'src/features/author/entities/author.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  tags: string;

  @ManyToOne(() => Author, (author) => author.books, { onDelete: 'SET NULL' })
  author: Author;
}
