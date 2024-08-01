import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private router: Router) { }

  ingresar(email: string, contraseña: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'email' && contraseña === 'contraseña') {
          localStorage.setItem('token', '');
          this.router.navigate(['dashboard', 'inscripciones']);
          resolve();
        } else {
          reject('Nombre de usuario y/o contraseñas incorrectos');
        }
      }, 1000);
    })
  }
}
