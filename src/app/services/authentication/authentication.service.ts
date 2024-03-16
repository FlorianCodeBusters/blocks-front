import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from 'src/app/clients/authenticationClient';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router,
  ) {}

  public login(username: string, password: string): void {
    this.authenticationClient.Login(username, password).subscribe((token) => {
      localStorage.setItem('token', token);
      this.router.navigate(['/']);
    });
  }

  public register(username: string, password: string, mail: string): void {
    this.authenticationClient
      .Register(username, password, mail)
      .subscribe((token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
      });
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem('token');

    return token !== null && token.length > 0;
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }
}
