import { Test, TestingModule } from '@nestjs/testing';
import { UserdecksController } from './userdecks.controller';
import { UserdecksService } from './userdecks.service';

describe('UserdecksController', () => {
  let controller: UserdecksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserdecksController],
      providers: [UserdecksService],
    }).compile();

    controller = module.get<UserdecksController>(UserdecksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
