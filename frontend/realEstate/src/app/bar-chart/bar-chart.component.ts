import { Component, OnInit, inject } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { AuthService } from '../auth/auth.service';
import { UsersReservations } from './interface.ts/users-reservations.interface';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements OnInit{

  // Atributo que almacena los datos del chart
  public chart!: Chart;
  ventas:UsersReservations[] = []
  private authService = inject(AuthService)
  nombresUsuarios:string[] = []
  numeroDeVentas:number[] = []
 
  ngOnInit(): void {

    this.authService.usersReservations()
    .subscribe({
      next:res => {
        this.ventas = res
        this.nombresUsuarios = this.ventas.map(v => v.username)
        this.numeroDeVentas = this.ventas.map(v => v.numeroReservasAprobadas)
        const data = {
        
          labels: this.nombresUsuarios,
          datasets: [{
            label: 'Ventas',
            data: this.numeroDeVentas,
          
            backgroundColor: [
              '#313131'
            ],
            
            borderColor: [
              '#9033ff'
            ],
            borderWidth: 1
          }]
        };
     
        // Creamos la gráfica
        this.chart = new Chart("chart", {
          type: 'bar' as ChartType, // tipo de la gráfica 
          data: data, // datos 
          options: { // opciones de la gráfica 
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: 'black' }
                
              },
              x:{
                beginAtZero: true,
                ticks: { color: 'black' }
              }
            },
          color:'black'
          },
        });
      },
      error: err => {
        console.log(err)
      }
    })

  

    // datos
   

  }

  
}
