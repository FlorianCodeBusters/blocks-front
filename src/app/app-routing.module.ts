import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { SecretComponent } from './components/secret/secret.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AdminSecretPageComponent } from './components/admin-secret-page/admin-secret-page.component';
import { RoleEnum } from './models/role.enum';

const routes: Routes = [
  {
    path: '',
    component: SecretComponent,
    canActivate: map[AuthGuard],
    data: {
      roles: [RoleEnum.User, RoleEnum.Admin],
    },
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'admin',
    component: AdminSecretPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [RoleEnum.Admin],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
