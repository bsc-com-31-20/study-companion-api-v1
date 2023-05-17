import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './courses';
import { Repository } from 'typeorm';

//this file needs to be changed
@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
      ) {}
    
      async findAllUsers(): Promise<Course[]> {
        return await this.courseRepository.find();
      }
    
      async findUserById(id: number): Promise<Course> {
        return await this.courseRepository.findOne({
          where: { id }
        });
      }
      
    
      async createCourse(course: Course): Promise<Course> {
        return await this.courseRepository.save(course);
      }
    
      async updateUser(id: number, data: Partial<Course>): Promise<void> {
        await this.courseRepository.update(id, data);
      }
    
      async deleteUser(id: number): Promise<void> {
        await this.courseRepository.delete(id);
      }
}
