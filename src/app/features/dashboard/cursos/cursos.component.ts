import { Component, OnInit } from '@angular/core';
import { CursosDisponibles } from './models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CursosService } from '../../../core/services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoCursoComponent } from './components/dialogo-curso/dialogo-curso.component';
import { generarId } from '../../shared/utils';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})

export class CursosComponent { //implements OnInit {
  listaCursos = '';
  cursosDisponibles: CursosDisponibles[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'inicio', 'fin', 'acciones'];
  dataSource!: CursosService[];
  cursosForm!: FormGroup;

  editarCurso!: CursosDisponibles;

  constructor(
    // private fb: FormBuilder,
    private cursosService: CursosService,
    private MatDialog: MatDialog
  ){}

  abrirDialog(): void{
    this.MatDialog.open(DialogoCursoComponent).afterClosed().subscribe({
      next: (value) => {
        this.listaCursos = value.name

        value['id'] = generarId(4);
        this.dataSource = [...this.dataSource, value]; 
      }
    })
  }

  modificarCurso(editarCurso: CursosDisponibles) {
    this.editarCurso = editarCurso;
    this.cursosForm.patchValue(editarCurso);
    }
  

  borrarCurso(id: string) {
    if (confirm('¿Desea borrar el curso?')) {
      this.cursosService.borrarCursoById(id);
    }
  }
}
