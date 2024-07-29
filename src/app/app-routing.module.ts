import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { InscripcionesComponent } from './features/dashboard/inscripciones/inscripciones.component';
import { LoginComponent } from './features/auth/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'inscripciones',
        component: InscripcionesComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: '/auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
