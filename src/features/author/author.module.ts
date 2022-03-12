import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { GenreModule } from '../genre/genre.module';

@Module({
  imports: [TypeOrmModule.forFeature([Author]), GenreModule],
  controllers: [AuthorController],
  providers: [AuthorService],
  exports: [AuthorService, TypeOrmModule],
})
export class AuthorModule {}
