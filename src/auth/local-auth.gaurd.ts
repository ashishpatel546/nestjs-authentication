import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGaurd extends AuthGuard('local') {

    // code for session based login/authentication
    // async canActivate(context: ExecutionContext){
    //     const result = (await super.canActivate(context)) as boolean
    //     const request = context.switchToHttp().getRequest()
    //     await super.logIn(request)
    //     return result
    // }

    /*************Code for session based authentication ends here ************** */
}
