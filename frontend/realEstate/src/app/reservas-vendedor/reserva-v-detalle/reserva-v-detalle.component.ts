import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '../interface/reserva.interface';
import { ReservasVendedorService } from '../reservas-vendedor.service';

@Component({
  selector: 'app-reserva-v-detalle',
  templateUrl: './reserva-v-detalle.component.html',
  styleUrl: './reserva-v-detalle.component.css'
})
export class ReservaVDetalleComponent implements OnInit {
 
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  reserva!:Reserva
  private reservaService = inject(ReservasVendedorService)

  reservaID: number = 0

  mapEstadoReserva : any = {
    0:'Ingresada',
    1:'Cancelada',
    2:'Aprobada',
    3:'Rechazada'
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .subscribe(params =>{
      this.reservaID = parseInt(params.get('id')!)
      this.reservaService.getReserva(this.reservaID)
      .subscribe({
        next:res => {
          this.reserva = res
        },
        error: err => {
          console.log(err)
        }
      })

    })
  }

  cancelarReserva(idReserva:number):void {
    this.reservaService.updateReservaCancel(idReserva)
    .subscribe({
      next:res => {
        console.log(res)
        this.router.navigateByUrl('/reservasVendedor')
      },
      error: err => {
        console.log(err)
        
      }
    })
  }

}
