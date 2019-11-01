import { Test, TestingModule } from '@nestjs/testing';
import { CourseradviserController } from './courseradviser.controller';

describe('Courseradviser Controller', () => {
  let controller: CourseradviserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseradviserController],
    }).compile();

    controller = module.get<CourseradviserController>(CourseradviserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
