import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('findAllUsers', () => {
    it('should return an array of users', async () => {
      const users = [{ id: 1, firstName: 'John', lastName: 'Smith', email: 's@gmail.com', password: 'avatart' }];
      jest.spyOn(repository, 'find').mockResolvedValue(users);

      expect(await service.findAllUsers()).toBe(users);
    });
  });

  describe('findUserById', () => {
    it('should return a user', async () => {
      const user = { id: 1, firstName: 'John', lastName: 'Smith', email: 's@gmail.com', password: 'avatart' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(user);

      expect(await service.findUserById(1)).toBe(user);
    });
  });

  describe('createUser', () => {
    it('should create a user', async () => {
        const user = { id: 1, firstName: 'John', lastName: 'Smith', email: 's@gmail.com', password: 'avatart' };
      jest.spyOn(repository, 'save').mockResolvedValue(user);

      expect(await service.createUser(user)).toBe(user);
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const user = { id: 1, name: 'John' };
      jest.spyOn(repository, 'update').mockResolvedValue(undefined);

      await service.updateUser(1, user);

      expect(repository.update).toHaveBeenCalledWith(1, user);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

      await service.deleteUser(1);

      expect(repository.delete).toHaveBeenCalledWith(1);
    });
  });
});
