import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from 'src/users/users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAllUsers', () => {
    it('should return an array of users', async () => {
      const result = [{ id: 1, firstName: 'John', lastName: 'Smith', email: 's@gmail.com', password: 'avatart' }];
      jest.spyOn(service, 'findAllUsers').mockImplementation(() => Promise.resolve(result));

      expect(await controller.findAllUsers()).toBe(result);
    });
  });

  describe('findUserById', () => {
    it('should return a user with the specified id', async () => {
 const result = { id: 1, firstName: 'John', lastName: 'Smith', email: 's@gmail.com', password: 'avatart' };
      jest.spyOn(service, 'findUserById').mockImplementation(() => Promise.resolve(result));

      expect(await controller.findUserById(1)).toBe(result);
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const user = { id: 1, firstName: 'John', lastName: 'Smith', email: 's@gmail.com', password: 'avatart' };
      const result = { id: 1, ...user };
      jest.spyOn(service, 'createUser').mockImplementation(() => Promise.resolve(result));

      expect(await controller.createUser(user)).toBe(result);
    });
  });

  describe('updateUser', () => {
    it('should update an existing user', async () => {
      const user = { id: 1, firstName: 'John', lastName: 'Smith', email: 's@gmail.com', password: 'avatart' };
      const result = { id: 1, ...user };
      jest.spyOn(service, 'updateUser').mockImplementation(() => Promise.resolve());

      expect(await controller.updateUser(1, user)).toBe(undefined);
    });
  });

  describe('deleteUser', () => {
    it('should delete an existing user', async () => {
      jest.spyOn(service, 'deleteUser').mockImplementation(() => Promise.resolve());

      expect(await controller.deleteUser(1)).toBe(undefined);
    });
  });
});
