import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosModule } from './productos/productos.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserVendedorModule } from './user-vendedor/user-vendedor.module';
import { ReservasVendedorModule } from './reservas-vendedor/reservas-vendedor.module';
import { ReservasComercialModule } from './reservas-comercial/reservas-comercial.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { GraphicUserComercialModule } from './graphic-user-comercial/graphic-user-comercial.module';


;



@NgModule({
  declarations: [
    AppComponent
  
   
  
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductosModule,
    HttpClientModule,
    AuthModule,
    UserVendedorModule,
    ReservasVendedorModule,
    ReservasComercialModule,
    GraphicUserComercialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
