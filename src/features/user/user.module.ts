import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserJsonRepository } from './user.json-repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserJsonRepository],
  exports: [UserService],
})
export class UserModule {}
