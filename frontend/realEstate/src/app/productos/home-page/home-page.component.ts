import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from '../../auth/interface/auth-status.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  isAuthenticated: boolean = false;
  private authService = inject(AuthService);
  private router = inject(Router);
  username:string | null = localStorage.getItem('username')

  ngOnInit(): void {
    console.log('Home page vendedor iniciado');

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
