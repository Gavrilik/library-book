import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { UserModule } from './features/user/user.module';
import { BookModule } from './features/book/book.module';
import { AuthModule } from './features/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { User } from './features/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'oleg6205854',
      database: 'postgres',
      entities: ['src/entity/**/*.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    BookModule,
    AuthModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
