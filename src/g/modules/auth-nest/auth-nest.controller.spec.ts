import { Test, TestingModule } from '@nestjs/testing';
import { AuthNestController } from './auth-nest.controller';

describe('AuthNestController', () => {
  let controller: AuthNestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthNestController],
    }).compile();

    controller = module.get<AuthNestController>(AuthNestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
