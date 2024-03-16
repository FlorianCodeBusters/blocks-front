import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  public registerForm!: FormGroup;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern(emailPattern),
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
