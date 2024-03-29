import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherClient {
  constructor(private httpClient: HttpClient) {}

  getWeatherData(): Observable<any> {
    return this.httpClient.get(environment.apiEndpoint + '/WeatherForecast');
  }
}
