import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStragegy } from './local.strategy';
import { UserModule } from 'src/user/user.module';
import { SessionSerializer } from './session-serializor';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  // imports: [UserModule, PassportModule.register({session: true})],  //for session based authentication
  // providers: [AuthService, LocalStragegy, SessionSerializer]
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: 'mysecret', //get it from env
    signOptions:{
      expiresIn: '60s'
    }
  })],
  providers: [AuthService, LocalStragegy, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
