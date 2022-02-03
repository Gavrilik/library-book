import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
@Controller('book')
export class BookController {
  constructor(private readonly bookServise: BookService) {}

  @Post()
  @UseGuards(AuthGuard('local'))
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookServise.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookServise.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookServise.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('local'))
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): void {
    return this.bookServise.update(+id, updateBookDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('local'))
  remove(@Param('id') id: string) {
    return this.bookServise.remove(+id);
  }
}
