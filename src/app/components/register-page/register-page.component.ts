import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorTestMatcher } from 'src/app/helpers/error-state-matcher';
import { PasswordValidator } from 'src/app/helpers/password.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  public registerForm!: FormGroup;
  public matcher = new MyErrorTestMatcher();
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(0),
      ]),
      password: new FormControl('', [Validators.required, PasswordValidator()]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(emailPattern),
      ]),
    });
  }

  public onRegister() {
    this.authenticationService.register(
      this.registerForm.get('username')?.value,
      this.registerForm.get('password')?.value,
      this.registerForm.get('email')?.value,
    );
  }
}
