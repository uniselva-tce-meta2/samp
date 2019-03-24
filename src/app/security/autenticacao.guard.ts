import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  canActivate(ext: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.estaLogado()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;

  }

  canActivateChild(ext: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.estaLogado()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
