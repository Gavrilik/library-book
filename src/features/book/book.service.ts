import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto): Promise<Book> {
    return this.bookRepository.save(createBookDto); //результат вызова bookJsonRepository
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(id: string): Promise<Book> {
    return this.bookRepository.findOne(id);
  }

  update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.bookRepository.save(updateBookDto);
  }

  remove(id: string): Promise<any> {
    return this.bookRepository.delete(id);
  }
}
