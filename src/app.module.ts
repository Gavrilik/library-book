import { Module } from '@nestjs/common';
import { UserModule } from './features/user/user.module';
import { BookModule } from './features/book/book.module';
import { AuthModule } from './features/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './features/book/entities/book.entity';
import { User } from './features/user/entities/user.entity';
import { SharedModule } from './shared/shared.module';
import { AuthorModule } from './features/author/author.module';
import { Author } from './features/author/entities/author.entity';
import { ConfigModule } from '@nestjs/config';
import configuration from './features/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'oleg6205854',
      database: 'library',
      entities: [Book, User, Author],
      synchronize: true,
      autoLoadEntities: true,
    }),

    UserModule,
    BookModule,
    AuthModule,
    SharedModule,
    AuthorModule,
  ],
})
export class AppModule {}
