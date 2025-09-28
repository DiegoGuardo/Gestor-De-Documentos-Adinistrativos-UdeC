import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      tipoUsuario: ['', Validators.required],
      codigo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login OK', this.loginForm.value);
      // aquí ira la llamada al servicio cuando tengas backend
    } else {
      this.loginForm.markAllAsTouched();
      // opcional: enfocamos el primer campo inválido
    }
  }
}
