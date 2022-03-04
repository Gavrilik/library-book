import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}
  create(createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genreRepository.save(createGenreDto);
  }

  findAll(): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  findOne(id: number): Promise<Genre> {
    return this.genreRepository.findOne(id);
  }

  update(id: number, updateGenreDto: UpdateGenreDto): Promise<UpdateResult> {
    return this.genreRepository.update(id, updateGenreDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.genreRepository.delete(id);
  }
}
