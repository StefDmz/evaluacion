import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../../../core/services/login/login.service';
import { User } from '../../../../core/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  public userForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  });

  constructor(
    private readonly _loginService: LoginService
  ){ }

  public get currentUser(): User {
    return this.userForm.value as User;
  }

  public login(): void {
    if(this.userForm.invalid) return;

    this._loginService.login(this.currentUser);
  }
}
