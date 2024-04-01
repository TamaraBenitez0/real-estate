import { Component, Input, inject } from '@angular/core';
import { Reserva } from '../interface/reserva.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas-v-card',
  templateUrl: './reservas-v-card.component.html',
  styleUrl: './reservas-v-card.component.css'
})
export class ReservasVCardComponent {

  @Input() reserva!: Reserva
  private router = inject(Router)

  mapEstadoReserva : any = {
    0:'Ingresada',
    1:'Cancelada',
    2:'Aprobada',
    3:'Rechazada'
  }

  irADetalle() {
    this.router.navigate(['reservasVendedor/detalle',this.reserva.idReserva])
  }
}
