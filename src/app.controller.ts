import { Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';

//Handles HTTP verbs
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

/*   @Get()
  findAllUsers(): string {
    return 'This returns all users';
  }

  @Get(':id')
  findSingleUser(@Param() params: any): string {
    console.log(params.id)
    return 'This returns a user';
  }

  @Post()
  createUser(): string {
    return 'This create a user';
  }

  @Patch('update')
  updateUser(): string {
    return 'This updates user data';
  }

  @Delete('delete')
  deleteUser(): string {
    return 'This deletes all users';
  }

   */
}
