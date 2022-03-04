import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { CryptoService } from './service/crypto.service';

@Module({
  imports: [DatabaseModule],
  providers: [CryptoService],
  exports: [CryptoService],
})
export class SharedModule {}
