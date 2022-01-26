/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import console from 'console';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import defaulteUsers from './user.json'; //массив, работа с массивом
let users = defaulteUsers;
@Injectable()
export class UserJsonRepository {
  create(createUserDto: CreateUserDto) {
    users.push(createUserDto);
    return this.findAll();
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    const condition = (u: CreateUserDto) => u.id === id;
    // передача условый разными способами
    const user = users.find(condition);
    //const user2 = users.find((user) => user.id === id) //правильный пример
    //const user3 = users.find(user => condition(user))
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    users = users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };   //Object.assign прочитать????
      }
      return user;
    });
    return this.findOne(id);
  }

  remove(id: number) {
    const user = users.filter((user) => user.id !== id);
    return user;
  }
}
