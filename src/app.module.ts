import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersController } from './users/users.controller';
import { APP_FILTER, HttpAdapterHost } from '@nestjs/core';
import { AllExceptionsFilter } from './ExceptionFilters/all-exceptions.filter';

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
        entities: [User],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([User]),
      UsersModule,
  
  ],
  controllers: [AppController],
  providers: [AppService,
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

