import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _baseUrl: string = environment.baseUrl + '/login.php';

  constructor(
    private http: HttpClient
  ){ }

  public get isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    location.replace('/clients');
  }

  public login(user: User): void {
    console.log(user);
    this.http.post(this._baseUrl, user)
      .subscribe((res: any) => {
        console.log(res);
        if(res.length == 0){
          Swal.fire('Advertencia', 'La contraseña o el usuario son incorrectos', 'warning');
        } else {
          Swal.fire('Bienvenid@', 'Bienvenid@ de vuelta al sistema', 'success').then(() => {
            location.replace('/admin/products');
            localStorage.setItem('token', res[0].id);
          });
        }
      });
  }
}
