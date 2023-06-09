import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UserService } from "src/user/user.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {

    constructor(private readonly userService: UserService){
        super()
    }

    serializeUser(user: any, done: (error: Error, user: any)=>void) {
        done(null, {id: user.id})
    }
    async deserializeUser(payload: any, done: (error: Error, user: any)=>void) {
        const user = await this.userService.findById(payload.id)
        done(null, user)
    }
    
}