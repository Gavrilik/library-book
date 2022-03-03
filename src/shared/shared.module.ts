import { Module } from '@nestjs/common';
import { CryptoService } from './service/crypto.service';

@Module({
  providers: [CryptoService],
  exports: [CryptoService],
})
export class SharedModule {}
