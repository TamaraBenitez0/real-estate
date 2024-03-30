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

  title: string = 'Seccion Reservas';

  private reservaService = inject(ReservasVendedorService)
  private router = inject(Router)
  reservas:Reserva[] = []

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe({
      next: res => {
        this.reservas = res
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    })
  }

 
  addReserva(){
    this.router.navigateByUrl('reservasVendedor/addReserva')
  }

}
