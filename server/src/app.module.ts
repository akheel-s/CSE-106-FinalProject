import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { DecksModule } from './decks/decks.module';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { UserdecksModule } from './userdecks/userdecks.module';
import { UserflashcardsModule } from './userflashcards/userflashcards.module';
import { AccuraciesModule } from './accuracies/accuracies.module';
import { ConfidencesModule } from './confidences/confidences.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsersModule, DecksModule, FlashcardsModule, UserdecksModule, UserflashcardsModule, AccuraciesModule, ConfidencesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
