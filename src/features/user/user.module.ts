import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SharedModule } from 'src/shared/shared.module';
import { BookModule } from '../book/book.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), SharedModule, BookModule],
  // метод, что бы определить какие репозитории зарегистрированы в текущей области.
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
