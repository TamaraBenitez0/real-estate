import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from './interface/login.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder)
  private router = inject(Router);
  private authService = inject(AuthService)

  myForm!: FormGroup
  



  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }


  
  isCompleteFullField() {

    const {username,password} = this.myForm.value

     return username!= '' && password!= ''
    

    }
  


  login(){
   

    const newUsuario = this.myForm.value as UserLogin

    this.authService.login(newUsuario)
    .subscribe({
      next:res => {
        
        this.router.navigateByUrl('/')
      },
      error: error => {
        console.log('error en login component')
      }
    })
    
    // result ok:
    
    // this.router.navigate(['detalle', 1])

  }


}