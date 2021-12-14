import { Module } from '@nestjs/common';
import { UserflashcardsService } from './userflashcards.service';
import { UserflashcardsController } from './userflashcards.controller';

@Module({
  controllers: [UserflashcardsController],
  providers: [UserflashcardsService]
})
export class UserflashcardsModule {}
