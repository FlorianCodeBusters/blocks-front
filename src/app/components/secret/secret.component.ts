import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherClient } from 'src/app/clients/weather.client';
import { RoleEnum } from 'src/app/models/role.enum';
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

  isAdmin(): boolean {
    const user = this.authenticationService.getUser();
    return (
      user !== null &&
      user !== undefined &&
      user.roles.indexOf(RoleEnum.Admin) !== -1
    );
  }
}
