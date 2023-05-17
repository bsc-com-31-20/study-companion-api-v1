import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 's1t2e3v4e5d6t7s9e8k10a12n11i14i13s12t13h12e12g13o14a14t007',
      signOptions: { expiresIn: '60s' },
    }),
  ],

  providers: [AuthService, UsersService],
  controllers: [AuthController],
 // exports: [AuthService],
})

export class AuthModule {}
