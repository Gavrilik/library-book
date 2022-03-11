import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { GenreService } from '../genre/genre.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    private genreServise: GenreService,
  ) {}

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.genreServise
      .findByIds(createAuthorDto.genreIds)
      .then((genres) => {
        const { genreIds, ...rest } = createAuthorDto;
        const author = { ...rest, genres };
        return this.authorRepository.save(author);
      });
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find({ relations: ['books'] });
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne({ id }, { relations: ['genres'] });
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<UpdateResult> {
    return this.authorRepository.update(id, updateAuthorDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.authorRepository.delete(id);
  }

  findByIds(authorIds: number[]): Promise<Author[]> {
    return this.authorRepository.findByIds(authorIds);
  }
}
