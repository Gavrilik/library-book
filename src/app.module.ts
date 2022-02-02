import { Module } from '@nestjs/common';
import { UserModule } from './features/user/user.module';
import { BookModule } from './features/book/book.module';
import { AuthModule } from './features/auth/auth.module';

@Module({
  imports: [UserModule, BookModule, AuthModule],
})
export class AppModule {}
