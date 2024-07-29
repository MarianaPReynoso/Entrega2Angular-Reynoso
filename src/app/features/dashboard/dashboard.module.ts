import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { InscripcionesModule } from './inscripciones/inscripciones.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    MatSidenavModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatListModule, 
    MatTableModule,
    InscripcionesModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }