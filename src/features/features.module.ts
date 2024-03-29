import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [UserModule, BookModule, AuthModule, AuthorModule, GenreModule],
})
export class FeaturesModule {}
