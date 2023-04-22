import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './users';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id') id: number): Promise<User> {
    return await this.userService.findUserById(id);
  }

  @Post()
  async createUser(@Body() userData: User): Promise<User> {
    return await this.userService.createUser(userData);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() userData: User): Promise<void> {
    await this.userService.updateUser(id, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
