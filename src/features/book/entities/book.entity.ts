import { Author } from 'src/features/author/entities/author.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  tags: string;

  @Column({ default: 0 })
  count: number;

  @ManyToOne(() => Author, (author) => author.books, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn()
  author: Author;
}
