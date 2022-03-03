import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CryptoService } from 'src/shared/service/crypto.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // метод, что бы определить какие репозитории зарегистрированы в текущей области.
  controllers: [UserController],
  providers: [UserService, CryptoService],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
