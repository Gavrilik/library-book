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
    // const condition = (u: CreateUserDto) => u.id === id; // лямда функция с условием для поиска
    return new Promise((resolve, reject) => {
      const user = users.find((user) => user.id === id);
      if (!user) {
        reject(new NotFoundException(`user not found!, ${id}`));
      }
      resolve(user);
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    //...(оператор spread ипользуется для слияние объектов)
    this.findOne(id);
    users = users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
  }

  remove(id: number) {
    this.findOne(id); // проверка на наличие пользователя
    const condition = (user) => user.id !== id; // условие для операции filter
    const filteredUsers = users.filter(condition);
    return (users = filteredUsers);
  }

  findByEmail(email: string) {
    return users.find((user) => user.email === email);
  }
}
