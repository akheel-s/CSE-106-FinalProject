import { Test, TestingModule } from '@nestjs/testing';
import { UserflashcardsController } from './userflashcards.controller';
import { UserflashcardsService } from './userflashcards.service';

describe('UserflashcardsController', () => {
  let controller: UserflashcardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserflashcardsController],
      providers: [UserflashcardsService],
    }).compile();

    controller = module.get<UserflashcardsController>(UserflashcardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
