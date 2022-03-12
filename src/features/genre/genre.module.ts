import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { Genre } from './entities/genre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from '../author/author.module';
import { Author } from '../author/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genre, Author])],
  controllers: [GenreController],
  providers: [GenreService],
  exports: [GenreService, TypeOrmModule],
})
export class GenreModule {}
