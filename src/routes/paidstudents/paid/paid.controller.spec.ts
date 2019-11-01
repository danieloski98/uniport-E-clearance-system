import { Test, TestingModule } from '@nestjs/testing';
import { PaidController } from './paid.controller';

describe('Paid Controller', () => {
  let controller: PaidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaidController],
    }).compile();

    controller = module.get<PaidController>(PaidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
