import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class IsLoggedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLogged().pipe(first(), tap(logged => logged || this.router.navigate(['/login'])));
  }

}
