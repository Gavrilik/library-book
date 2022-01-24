import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './features/user/user.module';
import { BookController } from './features/book/book.controller';
import { BookService } from './features/book/book.service';
import { BookModule } from './features/book/book.module';

@Module({
  imports: [UserModule, BookModule],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
