/*import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import defaulteBooks from './book.json'; //массив, работа с массивом
let books = defaulteBooks;
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { rejects } from 'assert';
import { resolve } from 'path/posix';
@Injectable()
export class BookJsonRepository {
  create(createBookDto: CreateBookDto) {
    return new Promise((resolve, reject) => {
      const isExsistingBook = books.some(
        (book) => book.id === createBookDto.id,
      );
      if (isExsistingBook) {
        reject(new ConflictException('same id'));
      }
      books.push(createBookDto);
      resolve(books);
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      resolve(books as CreateBookDto[]);
    });
  }

  findOne(id: number) {
    return new Promise((resolve, reject) => {
      const book = books.find((book) => book.id === id);
      if (!book) {
        reject(new NotFoundException(`book not found!, ${id}`));
      }
      resolve(book);
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return new Promise((resolve, reject) => {
      this.findOne(id);
      books = books.map((book) => {
        if (book.id === id) {
          return { ...book, ...updateBookDto };
        }
        resolve(book);
      });
    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      this.findOne(id);
      const condition = (book) => book.id !== id;
      const filteredBooks = books.filter(condition);
      books = filteredBooks;
      resolve(books);
    });
  }
}
*/
