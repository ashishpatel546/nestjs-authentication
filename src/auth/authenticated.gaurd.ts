import { CanActivate, ExecutionContext } from "@nestjs/common";

export class AuthenticatedGaurd implements CanActivate{
    
    canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest()
        return request.isAuthenticated()
    }
}