import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { CryptoService } from 'src/shared/service/crypto.service';
import { BookService } from '../book/book.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly cryptoService: CryptoService,
    private readonly bookService: BookService,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = {
      ...createUserDto,
      password: this.cryptoService.generate(createUserDto.password),
    };
    return this.userRepository.save(user); //результат вызова userJsonRepository
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ id }, { relations: ['books'] });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.save(updateUserDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }

  findByEmailAndPass(email: string, password: string): Promise<User> {
    return this.userRepository.findOne({ where: { email, password } }); //поиск по поролю
  }

  favorite(createUserDto: CreateUserDto): Promise<User> {
    return this.bookService.findByIds(createUserDto.userBooks).then((books) => {
      const { userBooks, ...rest } = createUserDto;
      const user = { ...rest, books };
      return this.userRepository.save(user);
    });
  }
}
