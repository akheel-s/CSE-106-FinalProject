import { Test, TestingModule } from '@nestjs/testing';
import { AccuraciesController } from './accuracies.controller';
import { AccuraciesService } from './accuracies.service';

describe('AccuraciesController', () => {
  let controller: AccuraciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccuraciesController],
      providers: [AccuraciesService],
    }).compile();

    controller = module.get<AccuraciesController>(AccuraciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
