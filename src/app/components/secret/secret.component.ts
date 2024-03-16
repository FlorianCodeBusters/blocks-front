import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherClient } from 'src/app/clients/weather.client';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss'],
})
export class SecretComponent implements OnInit {
  public weather: Observable<any> = this.weatherClient.getWeatherData();
  constructor(
    private authenticationService: AuthenticationService,
    private weatherClient: WeatherClient,
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
  }
}
