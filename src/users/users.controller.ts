import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { User } from './users';
import { UsersService } from './users.service';
import { RolesGuard } from 'src/Guards/roles.guard';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
    findAll(): any {
        throw new Error('Method not implemented.');
    }
    constructor(private readonly userService: UsersService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.findUserById(id);
  }

  @Post()
  async createUser(@Body() userData: User): Promise<User> {
    return await this.userService.createUser(userData);
  }

  @Put(':id')
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() userData: User): Promise<void> {
    await this.userService.updateUser(id, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
