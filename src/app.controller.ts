import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGaurd } from './auth/local-auth.gaurd';
import { AuthenticatedGaurd } from './auth/authenticated.gaurd';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.gaurd';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}


  @UseGuards(LocalAuthGaurd)
  @Post('/login')
  login(@Request() req){
    // return{msg: 'logged in'}
    return this.authService.login(req.user)
  }

  // @UseGuards(AuthenticatedGaurd)   //was for session based authetication
  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req) {
    return {msg : this.appService.getHello(),
      user: req.user
    };
  }
}
