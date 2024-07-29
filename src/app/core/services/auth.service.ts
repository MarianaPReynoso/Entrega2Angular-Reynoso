import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  ingresar() {
    localStorage.setItem('token', '');
    this.router.navigate(['dashboard', 'inscripciones']);
  }

  verificarToken() {}
}
