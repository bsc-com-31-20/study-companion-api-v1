import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { User } from './users';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController, AppController],
    providers: [UsersService, AppController],
  })
export class UsersModule {}
