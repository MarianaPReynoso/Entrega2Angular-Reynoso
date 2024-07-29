import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedModule,
    InscripcionesModule,
    CursosModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }