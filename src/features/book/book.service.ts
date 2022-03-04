import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AuthorService } from '../author/author.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable() // использование другим классом
export class BookService {
  // экспорт класса bookservice
  constructor(
    // взамодействие контроллера и сервиса с помощью конструктора
    @InjectRepository(Book) // указываем какой репозиторий должны использовать
    private readonly bookRepository: Repository<Book>, // внедрение зависимостей(разрешается и передается конструктору)
    private readonly authorService: AuthorService,
  ) {}

  create(createBookDto: CreateBookDto): Promise<Book> {
    // получаем createBookDto типа CreateBookDto: указывает тип данных
    return this.authorService.findOne(createBookDto.authorId).then((author) => {
      //возвращаем authors с методом findeOne(c параметрами)
      const { authorId, ...rest } = createBookDto; // ...rest остаточные параметры (собирает все остальные параметры)
      const book = { ...rest, author }; // передаем в переменную остаточные параметры и автора(оператор рест и добавление автора)
      return this.bookRepository.save(book); // возращаем метод сохранения перем. book
    });
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find(); // возвращаем все найденые эл массива.
  }

  findOne(id: number): Promise<Book> {
    return this.bookRepository
      .findOne({ id }, { relations: ['author'] })
      .then((book) => {
        book.count++;
        return this.update(id, book).then(() => book);
      });
  }

  update(id: number, updateBookDto: UpdateBookDto): Promise<UpdateResult> {
    return this.bookRepository.update(id, updateBookDto); // обновляет объект в бд
  }

  remove(id: number): Promise<DeleteResult> {
    return this.bookRepository.delete(id); // удаляет объект с бд
  }
}
