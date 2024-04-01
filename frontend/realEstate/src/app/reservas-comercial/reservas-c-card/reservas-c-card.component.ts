import { Component, Input, inject } from '@angular/core';
import { Reserva } from '../interface/reserva.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas-c-card',
  templateUrl: './reservas-c-card.component.html',
  styleUrl: './reservas-c-card.component.css'
})
export class ReservasCCardComponent {

  @Input() reserva!: Reserva
  private router = inject(Router)

  mapEstadoReserva : any = {
    0:'Ingresada',
    1:'Cancelada',
    2:'Aprobada',
    3:'Rechazada'
  }

  irADetalle() {
    this.router.navigate(['reservasComercial/detalle',this.reserva.idReserva])
  }
}
