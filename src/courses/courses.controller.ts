import { Body, Controller, Get, Delete, Param, ParseIntPipe, Put, UseGuards, Post } from '@nestjs/common';
import { RolesGuard } from 'src/Guards/roles.guard';
import { CoursesService } from './courses.service';
import { Course } from './courses';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('COURSES')
@Controller('/api/v1/courses')
@UseGuards(RolesGuard)
export class CoursesController {
    findAll(): any {
        throw new Error('Not found');
    }

constructor(private readonly CourseService: CoursesService){}


@Post()
@ApiOperation({ summary: 'Creating a course', description: ''})
@ApiOperation({ summary: 'Create a course' })
async createCourse(@Body() courseData: Course): Promise<Course> {
  return await this.CourseService.createCourse(courseData);
}

@Get()
@ApiOperation({ summary: 'Getting all courses', description: 'No need to enter any value. Expected output is a list of Courses from the db.'})
async findAllUsers(): Promise<Course[]> {
  return await this.CourseService.findAllCourses();
}

@Get(':id')
@ApiOperation({ summary: 'Get a course by ID', description: 'Requires an integer e.g 1 to be entered. Expected output is a single Course from the db.' })
async findUserById(@Param('id', ParseIntPipe) id: number): Promise<Course> {
  return await this.CourseService.findCourseById(id);
}

@Get(':id/status')
@ApiOperation({ summary: 'Get all students registered to a course' })
async returnUserStatus(@Param('id', ParseIntPipe) id: number): Promise<Course> {
  return await this.CourseService.findCourseById(id);
}

@Put(':id')
@ApiOperation({ summary: 'Change course name', description: 'Requires an integer e.g 2 to be entered. No expected output. Changes can be seen after another GET request.' })
async updateUser(@Param('id', ParseIntPipe) id: number, @Body() userData: Course): Promise<void> {
  await this.CourseService.updateCourse(id, userData);
}
}