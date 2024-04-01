import { Component, OnInit, inject } from '@angular/core';
import { ReservasVendedorService } from '../reservas-vendedor.service';
import { Router } from '@angular/router';
import { Reserva } from '../interface/reserva.interface';

@Component({
  selector: 'app-reservas-list',
  templateUrl: './reservas-list.component.html',
  styleUrl: './reservas-list.component.css'
})
export class ReservasListComponent implements OnInit {

  title: string = 'Reservas';

  private reservaService = inject(ReservasVendedorService)
  private router = inject(Router)
  reservas:Reserva[] = []
  username:string | null = localStorage.getItem('username')
  cantReservasUser:number = 0

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe({
      next: res => {
        this.reservas = res
       
      },
      error: err => {
        console.log(err)
      }
    })

    this.reservaService.reservasIngresadasUser(this.username!)
    .subscribe({
      next: res => {
        this.cantReservasUser = res
        console.log(res)
      } ,
      error: err => {
        console.log(err)
      }
    })
  }

  menosDeTresReservas() {
    return this.cantReservasUser < 3
  }

 
  addReserva(){
    this.router.navigateByUrl('reservasVendedor/addReserva')
  }

}
