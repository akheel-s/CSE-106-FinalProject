import { Test, TestingModule } from '@nestjs/testing';
import { AccuraciesService } from './accuracies.service';

describe('AccuraciesService', () => {
  let service: AccuraciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccuraciesService],
    }).compile();

    service = module.get<AccuraciesService>(AccuraciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
