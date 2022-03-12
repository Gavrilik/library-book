import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Author } from '../author/entities/author.entity';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable() //что бы класс стал провайдером
export class GenreService {
  constructor(
    @InjectRepository(Genre) //внедрение 1 репозитории!
    private readonly genreRepository: Repository<Genre>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  create(createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.authorRepository
      .findByIds(createGenreDto.authorIds)
      .then((authors) => {
        const { authorIds, ...rest } = createGenreDto;
        const author = { ...rest, authors };
        return this.genreRepository.save(author);
      });
  }

  findAll(): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  findOne(id: number): Promise<Genre> {
    return this.genreRepository.findOne({ id }, { relations: ['authors'] });
  }

  update(id: number, updateGenreDto: UpdateGenreDto): Promise<UpdateResult> {
    return this.genreRepository.update(id, updateGenreDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.genreRepository.delete(id);
  }

  findByIds(genreIds: number[]): Promise<Genre[]> {
    return this.genreRepository.findByIds(genreIds);
  }
}
