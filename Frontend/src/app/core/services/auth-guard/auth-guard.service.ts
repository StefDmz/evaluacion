import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private _loginService: LoginService
  ) { }

  public canActivate(): boolean {
    if(this._loginService.isAuthenticated){
      return true;
    } else {
      Swal.fire('Adveretncia', 'Debes iniciar sesión antes', 'warning').then(() => {
        location.replace('/admin/login');
      });
      return false;
    }
  }
}
