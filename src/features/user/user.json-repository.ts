/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import users from './user.json';//массив, работа с массивом 

@Injectable()
export class UserJsonRepository {
 
  create(createUserDto: CreateUserDto) {
   users.push(createUserDto);
   return this.findAll()
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    const user =users.find(user => user.id===id)
    return user;
    //return users [`${id}`];
    //return this.findOne(id);
    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
//const user = users.filter()

            //const user =  users.filter(user => user.id===id) //обновляет всем id 
            //return user; 
        }

  remove(id: number) {
    const user =  users.filter(user => user.id!==id)
    return user; 
    //const user = users.splice(1,6); //filter
    //return user;
  }
}

