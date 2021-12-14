import { Module } from '@nestjs/common';
import { ConfidencesService } from './confidences.service';
import { ConfidencesController } from './confidences.controller';

@Module({
  controllers: [ConfidencesController],
  providers: [ConfidencesService]
})
export class ConfidencesModule {}
