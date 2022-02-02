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
    const isExsistingUser = users.some((user) => user.id === createUserDto.id);
    if (isExsistingUser) {
      throw new ConflictException('same id');
    }
    users.push(createUserDto);
    return users;
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    const condition = (u: CreateUserDto) => u.id === id; // лямда функция с условием для поиска
    // передача условый разными способами
    const user = users.find(condition);
    if (!user) {
      throw new NotFoundException(`user not found!, ${id}`);
    }
    //const user2 = users.find((user) => user.id === id) //правильный пример
    //const user3 = users.find(user => condition(user))
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    //...(оператор spread ипользуется для слияние объектов)
    this.findOne(id);
    users = users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user; //Вывести в постман пользвователя!
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
