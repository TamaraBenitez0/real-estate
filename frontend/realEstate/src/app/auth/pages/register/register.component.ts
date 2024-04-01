import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { UserRegister } from '../../interface/user-register.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  private authService = inject(AuthService)
  private router = inject(Router)
  registerForm!: FormGroup
  usuarioCreado!: UserRegister;

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  isCompleteFullField() {

    const {username,password,role} = this.registerForm.value

     return username!= '' && password!= '' && role!=''
    

    }

  register(){
    
    const {username,password,role} = this.registerForm.value

    const newUser:UserRegister = {
      username,
      password,
      role
    }

    this.authService.register(newUser)
    .subscribe({
      next: userCreado => {
        this.usuarioCreado = userCreado;
        this.registerForm.reset()
        this.router.navigateByUrl('auth/login');
      },
      error: err => {
        console.log(err)
       
      }
    })

    
  }
}
