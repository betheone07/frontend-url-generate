import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthorizeService, private router: Router) { }
  

  canActivate(): boolean {
    if(this.auth.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }


}
