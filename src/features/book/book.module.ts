import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [UserModule],
})
export class BookModule {}
