import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosModule } from './productos/productos.module';
import { UserComercialComponent } from './user-comercial/user-comercial.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserVendedorModule } from './user-vendedor/user-vendedor.module';
import { ReservasVendedorModule } from './reservas-vendedor/reservas-vendedor.module';
import { ReservasComercialModule } from './reservas-comercial/reservas-comercial.module';
;



@NgModule({
  declarations: [
    AppComponent,
    UserComercialComponent
  
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductosModule,
    HttpClientModule,
    AuthModule,
    UserVendedorModule,
    ReservasVendedorModule,
    ReservasComercialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
