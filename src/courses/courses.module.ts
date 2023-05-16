import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { AppController } from 'src/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './courses';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService]
})

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CoursesController, AppController],
  providers: [CoursesService, AppController],
})
export class CoursesModule {}
