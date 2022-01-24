import { NestFactory } from '@nestjs/core';

import { UserModule } from './features/user/user.module';
import { BookModule } from './features/book/book.module';

async function bootstrap() {
  const user = await NestFactory.create(UserModule);
  const book = await NestFactory.create(BookModule);

  await user, book.listen(3000);
}
bootstrap();
