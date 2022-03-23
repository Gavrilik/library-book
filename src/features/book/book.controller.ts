import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
@Controller('book')
export class BookController {
  constructor(private readonly bookServise: BookService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookServise.create(createBookDto);
  }

  @Get()
  findAll(): Promise<Book[]> {
    return this.bookServise.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book> {
    return this.bookServise.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<UpdateResult> {
    return this.bookServise.update(+id, updateBookDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.bookServise.remove(+id);
  }
}
