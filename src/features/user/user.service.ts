import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserJsonRepository } from './user.json-repository';
@Injectable()
export class UserService {
  constructor(private readonly userJsonRepository: UserJsonRepository) {}
  create(createUserDto: CreateUserDto): Promise<any> {
    return this.userJsonRepository.create(createUserDto); //результат вызова userJsonRepository
  }

  findAll(): Promise<any> {
    return this.userJsonRepository.findAll();
  }

  findOne(id: number): Promise<any> {
    return this.userJsonRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userJsonRepository.update(+id, updateUserDto);
  }

  remove(id: number) {
    return this.userJsonRepository.remove(id);
  }

  findByEmail(email: string) {
    return this.userJsonRepository.findByEmail(email);
  }
}
