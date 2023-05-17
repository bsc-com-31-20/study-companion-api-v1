import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersController } from './users/users.controller';
import { APP_FILTER, APP_GUARD, HttpAdapterHost } from '@nestjs/core';
import { AllExceptionsFilter } from './ExceptionFilters/all-exceptions.filter';
import { CoursesModule } from './courses/courses.module';
import { Course } from './courses/courses';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

//Importing TypeORM for database connection
@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'stevetsekani',
        password: 'SteveD1@',
        database: 'study_companion',
        entities: [User, Course],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([User, Course]),
      UsersModule,
      CoursesModule,
      AuthModule,
  
  ],
  controllers: [AppController],
  providers: [AuthModule, AppService,
   {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    
    HttpAdapterHost,
    
 ],
  
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UsersController);
  }
}
//

