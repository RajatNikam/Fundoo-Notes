import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGuardService } from '../services/authguardService/auth-guard.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {

  constructor(private AuthGuardService: AuthGuardService, private router: Router) { }
  canActivate(): boolean {
    if (!this.AuthGuardService.gettoken()) {
      this.router.navigateByUrl("/login");
      console.log("login Success")
    }
    return this.AuthGuardService.gettoken();

  }

}