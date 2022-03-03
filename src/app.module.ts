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
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    BookModule,
    AuthModule,
    SharedModule,
    AuthorModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'aurora-data-api'>('TYPEORM_CONNECTION'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        port: config.get<number>('TYPEORM_PORT'),
        entities: [Book, User, Author],
        synchronize: true,
        autoLoadEntities: true,
        logging: true, // поч
      }),
    }),
  ],
})
export class AppModule {}
