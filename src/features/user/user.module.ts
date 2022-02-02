import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserJsonRepository } from './user.json-repository';
import { AuthController } from '../auth/auth.controller';

@Module({
  controllers: [UserController, AuthController],
  providers: [UserService, UserJsonRepository],
  exports: [UserService],
})
export class UserModule {}
