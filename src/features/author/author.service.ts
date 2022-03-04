import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.save(createAuthorDto);
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne({ id }, { relations: ['books'] });
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<UpdateResult> {
    return this.authorRepository.update(id, updateAuthorDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.authorRepository.delete(id);
  }
}
