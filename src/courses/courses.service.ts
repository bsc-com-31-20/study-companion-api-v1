import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './courses';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
      ) {}
    
      async findAllCourses(): Promise<Course[]> {
        return await this.courseRepository.find();
      }
    
      async findCourseById(id: number): Promise<Course> {
        return await this.courseRepository.findOne({
          where: { id }
        });
      }
      
    
      async createCourse(course: Course): Promise<Course> {
        return await this.courseRepository.save(course);
      }
    
      async updateCourse(id: number, data: Partial<Course>): Promise<void> {
        await this.courseRepository.update(id, data);
      }
    
      async deleteCourse(id: number): Promise<void> {
        await this.courseRepository.delete(id);
      }
}
