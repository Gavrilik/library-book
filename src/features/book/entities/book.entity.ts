import { Author } from 'src/features/author/entities/author.entity';
import { User } from 'src/features/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
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

  @ManyToMany(() => Book, (book) => book.users, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  users: User[];
}
