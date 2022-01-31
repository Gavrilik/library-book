import { Module } from '@nestjs/common';
import { UserModule } from './features/user/user.module';
import { BookModule } from './features/book/book.module';

@Module({
  imports: [UserModule, BookModule],
})
export class AppModule {}
