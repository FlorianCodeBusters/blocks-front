import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value as string;
    const regex =
      /^(?=.*d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*{|}?~_=+.-]{1})(?=.*[^a-zA-Z0-9])(?!.*s).{6,24}$/g;

    let valid = regex.test(password);
    return valid ? null : { password: { value: control.value } };
  };
}
