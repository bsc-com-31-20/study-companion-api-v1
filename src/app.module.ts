import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users';
import { UsersModule } from './users/users.module';

//annotation something
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
  providers: [AppService],
  
})
export class AppModule {}
//

