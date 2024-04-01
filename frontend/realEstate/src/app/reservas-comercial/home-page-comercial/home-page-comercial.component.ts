import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AuthStatus } from '../../auth/interface/auth-status.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-comercial',
  templateUrl: './home-page-comercial.component.html',
  styleUrl: './home-page-comercial.component.css'
})
export class HomePageComercialComponent implements OnInit {

  isAuthenticated: boolean = false;
  private authService = inject(AuthService);
  private router = inject(Router);
  username:string | null = localStorage.getItem('username')

  ngOnInit(): void {
    console.log('Home page comercial iniciado');

    this.authService.checkStatus();

    if(this.authService.authStatus() === AuthStatus.authenticated){
      this.isAuthenticated = true;
    }

   

  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('auth/login');
    

  }
}
