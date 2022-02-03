import { Injectable } from '@nestjs/common';
import { BookJsonRepository } from './book.json-repository';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private readonly bookJsonRepository: BookJsonRepository) {}

  create(createBookDto: CreateBookDto) {
    return this.bookJsonRepository.create(createBookDto); //результат вызова bookJsonRepository
  }

  findAll() {
    return this.bookJsonRepository.findAll();
  }

  findOne(id: number) {
    return this.bookJsonRepository.findOne(id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookJsonRepository.update(+id, updateBookDto);
  }

  remove(id: number) {
    return this.bookJsonRepository.remove(id);
  }
}
