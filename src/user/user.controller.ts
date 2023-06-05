import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './dto/User.dto';

@Controller('user')
export class UserController {
    constructor(
        private userService : UserService
    ){}

    @Post()
    createUser(@Body() body: User){
        return this.userService.createUser(body)
    }

    @Get('/allusers')
    getAllUsers(){
        return this.userService.findAll()
    }

    @Get('/:id')
    getOneUser(@Param('username') username: string ){
        return this.userService.findOne(username)
    }
}
