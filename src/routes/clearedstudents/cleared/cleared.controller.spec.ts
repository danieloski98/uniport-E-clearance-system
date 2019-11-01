import { Test, TestingModule } from '@nestjs/testing';
import { ClearedController } from './cleared.controller';

describe('Cleared Controller', () => {
  let controller: ClearedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClearedController],
    }).compile();

    controller = module.get<ClearedController>(ClearedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
