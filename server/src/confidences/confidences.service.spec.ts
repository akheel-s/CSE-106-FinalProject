import { Test, TestingModule } from '@nestjs/testing';
import { ConfidencesService } from './confidences.service';

describe('ConfidencesService', () => {
  let service: ConfidencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfidencesService],
    }).compile();

    service = module.get<ConfidencesService>(ConfidencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
