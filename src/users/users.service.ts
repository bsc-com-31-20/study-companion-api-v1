import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }


  async findOne(email: string, password: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {email, password}
    });
    //return this.userRepository.find(user => user.username === username);
  }


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

