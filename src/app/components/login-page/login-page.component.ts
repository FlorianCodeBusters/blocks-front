import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/helpers/password.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public loginForm!: FormGroup;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(0),
      ]),
      password: new FormControl('', [Validators.required, PasswordValidator()]),
    });
  }

  public onLogin() {
    this.authenticationService.login(
      this.loginForm.get('username')!.value,
      this.loginForm.get('password')!.value,
    );
  }
}
