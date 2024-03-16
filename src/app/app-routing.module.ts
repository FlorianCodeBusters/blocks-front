import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretComponent } from './components/secret/secret.component';

const routes: Routes = [
  {
    path: '',
    component: SecretComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
