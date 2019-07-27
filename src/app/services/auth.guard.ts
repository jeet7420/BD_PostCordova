import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{

  constructor(private router: Router, private authService: AuthService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("inside guard service");
    if (await this.authService.getToken()) {
      console.log(this.authService.getToken());
      return true;
    }
    this.router.navigate(['/tabs/login'], {
      queryParams: {
        redirect: state.url
      }
    });
    return false;
  }
}
