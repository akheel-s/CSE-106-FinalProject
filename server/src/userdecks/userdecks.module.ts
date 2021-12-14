import { Module } from '@nestjs/common';
import { UserdecksService } from './userdecks.service';
import { UserdecksController } from './userdecks.controller';

@Module({
  controllers: [UserdecksController],
  providers: [UserdecksService]
})
export class UserdecksModule {}
