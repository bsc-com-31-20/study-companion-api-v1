import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(firstName, password) {
    const user = await this.usersService.findOne(firstName);
    if (user?.password !== password) {
        console.log('you are here');
      throw new UnauthorizedException();
    }
    const payload = { username: user.firstName, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}