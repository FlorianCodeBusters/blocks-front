import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public Login(username: string, password: string): Observable<string> {
    return this.http.post(
      environment.apiEndpoint + 'user/login',
      {
        username: username,
        password: password,
      },
      { responseType: 'text' }
    );
  }

  public Register(
    username: string,
    password: string,
    mail: string
  ): Observable<string> {
    return this.http.post(
      environment.apiEndpoint + 'user/register',
      {
        username,
        password,
        mail,
      },
      { responseType: 'text' }
    );
  }
}
