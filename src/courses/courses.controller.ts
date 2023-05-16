import { Body, Controller, Get, Delete, Param, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/Guards/roles.guard';
import { CoursesService } from './courses.service';
import { Course } from './courses';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('COURSES')
@Controller('/api/v1/courses')
@UseGuards(RolesGuard)
export class CoursesController {
    findAll(): any{
        throw new Error('Not found');
    }

constructor(private readonly CourseService: CoursesService){}

@Get()
@ApiOperation({ summary: 'Get all courses' })
async findAllUsers(): Promise<Course[]> {
  return await this.CourseService.findAllUsers();
}

@Get(':id')
@ApiOperation({ summary: 'Get a course by ID' })
async findUserById(@Param('id', ParseIntPipe) id: number): Promise<Course> {
  return await this.CourseService.findUserById(id);
}

@Get(':id/status')
@ApiOperation({ summary: 'Get all students registered to a course' })
async returnUserStatus(@Param('id', ParseIntPipe) id: number): Promise<Course> {
  //unimplemented method
  return await this.CourseService.findUserById(id);
}

//@Post()
//async createUser(@Body() userData: User): Promise<User> {
  //return await this.CourseService.createUser(userData);
//}

@Put(':id')
@ApiOperation({ summary: 'Change course name' })
async updateUser(@Param('id', ParseIntPipe) id: number, @Body() userData: Course): Promise<void> {
  await this.CourseService.updateUser(id, userData);
}

@Delete(':id')
@ApiOperation({ summary: 'Remove course by ID' })
async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
  await this.CourseService.deleteUser(id);
}

}