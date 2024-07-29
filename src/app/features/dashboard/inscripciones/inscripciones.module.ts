import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesComponent } from './inscripciones.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MiniDialogoComponent } from './components/mini-dialogo/mini-dialogo.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [InscripcionesComponent, DialogoComponent, MiniDialogoComponent],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    MatTableModule, 
    MatIconModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule, 
    MatDatepickerModule, 
    ReactiveFormsModule, 
    MatSelectModule, 
    FormsModule, 
    SharedModule,
  ],
  exports: [InscripcionesComponent]
})

export class InscripcionesModule { }

