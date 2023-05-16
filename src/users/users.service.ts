import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users';

@Injectable()
export class UsersService {
  
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(firstName: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {firstName}
    });
    //return this.users.find(user => user.username === username);
  }
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findUserById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id }
    });
  }
  

  async createUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async updateUser(id: number, data: Partial<User>): Promise<void> {
    await this.userRepository.update(id, data);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}

