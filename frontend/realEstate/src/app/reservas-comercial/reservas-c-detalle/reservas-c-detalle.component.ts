import { Component, OnInit, inject } from '@angular/core';
import { ReservasComercialService } from '../reservas-comercial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '../interface/reserva.interface';

@Component({
  selector: 'app-reservas-c-detalle',
  templateUrl: './reservas-c-detalle.component.html',
  styleUrl: './reservas-c-detalle.component.css'
})
export class ReservasCDetalleComponent implements OnInit{

  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  reserva!:Reserva
  private reservaService = inject(ReservasComercialService)

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

  aprobarReserva(idR:number) {
    return this.reservaService.updateReservaApprove(idR)
    .subscribe({
      next:res => {
        console.log(res)
        this.router.navigateByUrl('/reservasComercial')
      },
      error: err => {
        console.log(err)
        
      }
    })

  }

  rechazarReserva(idR:number) {
    return this.reservaService.updateReservaDecline(idR)
    .subscribe({
      next:res => {
        console.log(res)
        this.router.navigateByUrl('/reservasComercial')
      },
      error: err => {
        console.log(err)
        
      }
    })
  }
}
