import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const user = this.authenticationService.getUser();

    if (user) {
      if (
        route.data['roles'] &&
        route.data['roles'].indexOf(user.roles) === -1
      ) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
