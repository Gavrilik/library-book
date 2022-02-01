import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookJsonRepository } from './book.json-repository';

@Module({
  controllers: [BookController],
  providers: [BookService, BookJsonRepository],
})
export class BookModule {}
