import { Module } from '@nestjs/common';
import { AccuraciesService } from './accuracies.service';
import { AccuraciesController } from './accuracies.controller';

@Module({
  controllers: [AccuraciesController],
  providers: [AccuraciesService]
})
export class AccuraciesModule {}
