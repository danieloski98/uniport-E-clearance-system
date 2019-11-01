import { Test, TestingModule } from '@nestjs/testing';
import { NextStepController } from './next-step.controller';

describe('NextStep Controller', () => {
  let controller: NextStepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NextStepController],
    }).compile();

    controller = module.get<NextStepController>(NextStepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
