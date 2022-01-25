import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserJsonRepository } from './user.json-repository';
@Injectable()
export class UserService {
  constructor(private readonly userJsonRepository: UserJsonRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.userJsonRepository.create(createUserDto); //результат вызова userJsonRepository
  }

  findAll() {
    return this.userJsonRepository.findAll();
  }

  findOne(id: number) {
    return this.userJsonRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userJsonRepository.update(+id, updateUserDto);
  }

  remove(id: number) {
    return this.userJsonRepository.remove(id);
  }
}
