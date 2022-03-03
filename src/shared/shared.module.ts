import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/features/author/entities/author.entity';
import { Book } from 'src/features/book/entities/book.entity';
import { User } from 'src/features/user/entities/user.entity';
import { CryptoService } from './service/crypto.service';

@Global()
@Module({
  imports: [
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
  providers: [CryptoService],
  exports: [CryptoService],
})
export class SharedModule {}
