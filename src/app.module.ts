import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { DbModule } from './shared/db.module';

@Module({
  imports: [SharedModule, FeaturesModule, DbModule],
})
export class AppModule {}
