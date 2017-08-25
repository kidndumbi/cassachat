import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private Auth: AuthService, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.Auth.isAuthenticated().then(
            (authenticated: boolean) =>{
               if(authenticated){
                 return true;
               }else{
                  console.log('not authorized');
                  this.route.navigate(['/']);

               }
            }
        );

    }
    //test

    canActivateChild(route: ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
         
         return this.canActivate(route, state);
    }

}