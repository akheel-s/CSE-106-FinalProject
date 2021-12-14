import { Test, TestingModule } from '@nestjs/testing';
import { ConfidencesController } from './confidences.controller';
import { ConfidencesService } from './confidences.service';

describe('ConfidencesController', () => {
  let controller: ConfidencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfidencesController],
      providers: [ConfidencesService],
    }).compile();

    controller = module.get<ConfidencesController>(ConfidencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
