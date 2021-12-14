import { Test, TestingModule } from '@nestjs/testing';
import { UserflashcardsService } from './userflashcards.service';

describe('UserflashcardsService', () => {
  let service: UserflashcardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserflashcardsService],
    }).compile();

    service = module.get<UserflashcardsService>(UserflashcardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
