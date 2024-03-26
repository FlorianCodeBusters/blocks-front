import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public Login(username: string, password: string): Observable<Result<string>> {
    return this.http.post<Result<string>>(
      environment.apiEndpoint + '/Authenticate',
      {
        username: username,
        password: password,
      },
    );
  }

  public Register(
    username: string,
    password: string,
    mail: string,
  ): Observable<Result<string>> {
    console.log('mail ' + mail);
    return this.http.post<Result<string>>(
      environment.apiEndpoint + '/authenticate/register',
      {
        username,
        password,
        Email: mail,
      },
    );
  }
}
