import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public Login(username: string, password: string): Observable<string> {
    return this.http.post(
      environment.apiEndpoint + '/Authenticate',
      {
        username: username,
        password: password,
      },
      { responseType: 'text' },
    );
  }

  public Register(
    username: string,
    password: string,
    mail: string,
  ): Observable<string> {
    console.log('mail ' + mail);
    return this.http.post(
      environment.apiEndpoint + '/authenticate/register',
      {
        username,
        password,
        Email: mail,
      },
      { responseType: 'text' },
    );
  }
}
