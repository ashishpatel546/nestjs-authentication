import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session'
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**********************code for session based authentication ***********************/
  // app.use(session({
  //   secret: 'mysecret', //get it from .env
  //   resave: false,
  //   saveUninitialized: false,
  //   cookie: {maxAge: 3600000}
  // }))
  // app.use(passport.initialize())
  // app.use(passport.session())

  /****************Code for session based authentication ends ************ */


  app.useGlobalPipes(new ValidationPipe({whitelist: true}))
  await app.listen(3000);
}
bootstrap();
