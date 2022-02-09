import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import defaulteUsers from './user.json'; //массив, работа с массивом
let users = defaulteUsers;
@Injectable()
export class UserJsonRepository {
  create(createUserDto: CreateUserDto) {
    return new Promise((resolve, reject) => {
      const existingUser = users.some((user) => user.id === createUserDto.id);
      if (existingUser) {
        reject(new ConflictException('same id'));
      }
      users.push(createUserDto);
      resolve(users);
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      resolve(users as CreateUserDto[]);
    });
  }

  findOne(id: number) {
    return new Promise((resolve, reject) => {
      const user = users.find((user) => user.id === id);
      if (!user) {
        reject(new NotFoundException(`user not found!, ${id}`));
      }
      resolve(user);
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return new Promise((resolve, reject) => {
      this.findOne(id);
      users = users.map((user) => {
        if (user.id === id) {
          return { ...user, ...updateUserDto };
        }
        resolve(user);
      });
    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      this.findOne(id);
      const condition = (user) => user.id !== id;
      const filteredUsers = users.filter(condition);
      users = filteredUsers;
      resolve(users);
    });
  }

  findByEmail(email: string) {
    return new Promise((resolve, reject) => {
      const user = users.find((user) => user.email === email);
      if (!user) {
        reject(new NotFoundException(`email not found!, ${email}`));
      }
      resolve(users.find((user) => user.email === email));
    });
  }
}
