import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-admin-secret-page',
  templateUrl: './admin-secret-page.component.html',
  styleUrls: ['./admin-secret-page.component.scss'],
})
export class AdminSecretPageComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}
  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
  }
}
