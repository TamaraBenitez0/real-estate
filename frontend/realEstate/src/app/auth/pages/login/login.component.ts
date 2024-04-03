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
  isLoading:boolean = false
  showError:boolean = false
  errorAlert:string = ''

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
   
    this.isLoading = true;
    const newUsuario = this.myForm.value as UserLogin

    this.authService.login(newUsuario)
    .subscribe({
      next:res => {
        this.isLoading = false;
        this.showError = false
        this.router.navigateByUrl('/')
      },
      error: error => {
        this.showError = true;
        this.isLoading = false
        this.errorAlert = error.error
        
      },
      complete: () =>{
        this.isLoading = false;
        this.showError = false
      }
    })
    
    // result ok:
    
    // this.router.navigate(['detalle', 1])

  }


}