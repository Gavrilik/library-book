import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import defaulteBooks from './book.json'; //массив, работа с массивом
let books = defaulteBooks;
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
@Injectable()
export class BookJsonRepository {
  create(createBookDto: CreateBookDto) {
    const isExsistingBook = books.some((book) => book.id === createBookDto.id);
    if (isExsistingBook) {
      throw new ConflictException('same id');
    }
    books.push(createBookDto);
    return books;
  }
  findAll() {
    return books;
  }

  findOne(id: number) {
    const condition = (b: CreateBookDto) => b.id === id;
    const book = books.find(condition);
    if (!book) {
      throw new NotFoundException(`book not found!, ${id}`);
    }
    return book;
  }
  update(id: number, updateBookDto: UpdateBookDto) {
    books = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updateBookDto };
      }
      return this.findOne(id);
    });
  }
  remove(id: number) {
    this.findOne(id);
    const condition = (book) => book.id !== id;
    const filteredBooks = books.filter(condition);
    books = filteredBooks;
    return books;
  }
}
