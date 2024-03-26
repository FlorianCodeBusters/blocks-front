import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationClient } from 'src/app/clients/authenticationClient';
import { jwtDecode } from 'jwt-decode';
import { Result } from 'src/app/models/result.model';
import { ClaimsEnum } from 'src/app/models/claims.enum';
import { User } from 'src/app/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userKey = 'user';
  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  public login(username: string, password: string): void {
    this.authenticationClient.Login(username, password).subscribe({
      next: (result) => {
        this.handleSucessAuthResult(result);
      },
      error: (error) => {
        this.handleErrorAuthResult(error);
      },
    });
  }

  public register(username: string, password: string, mail: string): void {
    this.authenticationClient.Register(username, password, mail).subscribe({
      next: (result) => {
        this.handleSucessAuthResult(result);
      },
      error: (error) => {
        this.handleErrorAuthResult(error);
      },
    });
  }

  public logout() {
    localStorage.removeItem(this.userKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = this.getToken();
    return token !== null && token.length > 0;
  }

  public getUser(): User | null {
    const userJson = localStorage.getItem(this.userKey);

    if (userJson) {
      let user: User = JSON.parse(userJson);
      return user;
    }
    return null;
  }

  public getToken(): string | null {
    const user = this.getUser();
    if (user) {
      return user.token;
    }
    return null;
  }

  private handleSucessAuthResult(result: Result<string>): void {
    let message;

    if (result != null && result.isSuccess && result.response.length > 1) {
      const decodeToken = jwtDecode<any>(result.response);

      const user = new User(
        decodeToken[ClaimsEnum.NameTokenKey],
        decodeToken[ClaimsEnum.EmailTokenKey],
        decodeToken[ClaimsEnum.RoleTokenKey],
        result.response,
      );
      localStorage.setItem(this.userKey, JSON.stringify(user.token));
      this.router.navigate(['/']);
      message = 'User has been authenticated.';
    } else if (result != null && !result.isSuccess) {
      message = result.errors.join(' ');
    } else {
      message = 'An error occurred while authenticating the user.';
    }
    this.snackBar.open(message, 'Close');
  }

  private handleErrorAuthResult(error: HttpErrorResponse): void {
    let errorMessages = [];
    console.log(error);
    let validationErrorDictionary = JSON.parse(
      JSON.stringify(error.error.errors),
    );
    for (let fieldName in validationErrorDictionary) {
      if (validationErrorDictionary.hasOwnProperty(fieldName)) {
        errorMessages.push(validationErrorDictionary[fieldName]);
      }
    }
    this.snackBar.open(errorMessages.join(' '), 'Close');
  }
}
