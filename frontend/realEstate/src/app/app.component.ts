import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthStatus } from './auth/interface/auth-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);
  title = 'realEstate';

  isAuthenticated: boolean = false;


  ngOnInit(): void {
    console.log('App Component Iniciado');

    this.authService.checkStatus();

    if(this.authService.authStatus() === AuthStatus.authenticated){
      this.isAuthenticated = true;
    }
  }

  /* logout(){
    this.authService.logout();
  } */
  
}
