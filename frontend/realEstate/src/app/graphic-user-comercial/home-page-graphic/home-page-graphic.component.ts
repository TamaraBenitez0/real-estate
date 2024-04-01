import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from '../../auth/interface/auth-status.enum';

@Component({
  selector: 'app-home-page-graphic',
  templateUrl: './home-page-graphic.component.html',
  styleUrl: './home-page-graphic.component.css'
})
export class HomePageGraphicComponent implements OnInit {

  isAuthenticated: boolean = false;
  private authService = inject(AuthService);
  private router = inject(Router);
  username:string | null = localStorage.getItem('username')

  ngOnInit(): void {
    console.log('Home page graphic iniciado');

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
