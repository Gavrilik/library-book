import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateBookDto } from './dto/create-book.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookServise: BookService) {}

  @Post()
  create(@Body() CreateBookDto: CreateBookDto) {
    return this.bookServise.create(CreateBookDto);
  }

  @Get()
  findAll() {
    return this.bookServise.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookServise.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateBookDto: UpdateBookDto) {
    return this.bookServise.update(+id, UpdateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookServise.remove(+id);
  }
}
