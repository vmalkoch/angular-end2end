import { Injectable } from '@angular/core'; //add our sevice to other components and modules
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class UserService implements CanActivate{

    constructor( private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }
    userLoggedIn: boolean = false;

    verifyLogin(url: string): boolean{
        if(this.userLoggedIn) {return true;}

        this.router.navigate(['/admin/login']);
        return false;
    }
}