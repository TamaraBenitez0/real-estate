import { Component, inject } from '@angular/core';
import { ReservasComercialService } from '../reservas-comercial.service';
import { Router } from '@angular/router';
import { Reserva } from '../interface/reserva.interface';

@Component({
  selector: 'app-reservas-list-comercial',
  templateUrl: './reservas-list-comercial.component.html',
  styleUrl: './reservas-list-comercial.component.css'
})
export class ReservasListComercialComponent {

  title:string = 'Reservas Section'
  private reservaService = inject(ReservasComercialService)
  private router = inject(Router)
  reservas:Reserva[] = []

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe({
      next: res => {
        this.reservas = res
       
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
