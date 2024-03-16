import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from 'src/app/clients/authenticationClient';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  public Login(username: string, password: string): void {
    this.authenticationClient.Login(username, password).subscribe((token) => {
      localStorage.setItem('token', token);
      this.router.navigate(['/']);
    });
  }

  public Register(username: string, password: string, mail: string): void {
    this.authenticationClient
      .Register(username, password, mail)
      .subscribe((token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
      });
  }

  public Logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public IsLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  public GetToken(): string | null {
    return localStorage.getItem('token');
  }
}
