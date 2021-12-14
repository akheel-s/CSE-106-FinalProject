import { Test, TestingModule } from '@nestjs/testing';
import { UserdecksService } from './userdecks.service';

describe('UserdecksService', () => {
  let service: UserdecksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserdecksService],
    }).compile();

    service = module.get<UserdecksService>(UserdecksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
