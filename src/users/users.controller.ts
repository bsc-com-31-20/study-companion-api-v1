import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { User } from './users';
import { UsersService } from './users.service';
import { RolesGuard } from 'src/Guards/roles.guard';
import {ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';

@ApiTags('USERS')
@Controller('/api/v1/users')

export class UsersController {
    findAll(): any {
        throw new Error('Method not implemented.');
    }
    constructor(private readonly userService: UsersService) {}


    @Post('auth')
    @ApiOperation({ summary: 'Verify if the user is available' })
    async validateUser(@Body() userData: User): Promise<User> {
      //awaiting logic steve eeh
      return await this.userService.createUser(userData);
    }


  @ApiOkResponse({type:User})
  @Get()
  //@UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get all users' })
  async findAllUsers(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @ApiOkResponse({type:User})
  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  async findUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.findUserById(id);
  }

  @ApiOkResponse({type:User})
  @Get(':id/status')
  @ApiOperation({ summary: 'Get all students registered to a course' })
  async returnUserStatus(@Param('id', ParseIntPipe) id: number): Promise<User> {
    //unimplemented method
    return await this.userService.findUserById(id);
  }

  @ApiOkResponse({type:User})
  @Post()
  @ApiOperation({ summary: 'Create a user' })
  async createUser(@Body() userData: User): Promise<User> {
    return await this.userService.createUser(userData);
  }

  @ApiOkResponse({type:User})
  @Put(':id')
  @ApiOperation({ summary: 'Update details of a user' })
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() userData: User): Promise<void> {
    await this.userService.updateUser(id, userData);
  }

  @ApiOkResponse({type:User})
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
