import { Module } from '@nestjs/common';
import { UserModule } from './features/user/user.module';
import { BookModule } from './features/book/book.module';
import { AuthModule } from './features/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './features/book/entities/book.entity';
import { User } from './features/user/entities/user.entity';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'oleg6205854',
      database: 'postgres',
      entities: [Book, User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    BookModule,
    AuthModule,
    SharedModule,
  ],
})
export class AppModule {}
