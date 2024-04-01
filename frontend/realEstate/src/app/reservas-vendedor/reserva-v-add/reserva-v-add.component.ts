import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservasVendedorService } from '../reservas-vendedor.service';
import { addReserva } from '../interface/addReserva.interface';
import { ProductosService } from '../../productos/productos.service';
import { BarrioService } from '../../barrio/barrio.service';
import { Barrio } from '../../barrio/interface/barrio.interface';
import { Producto } from '../../productos/interface/producto.interface';

@Component({
  selector: 'app-reserva-v-add',
  templateUrl: './reserva-v-add.component.html',
  styleUrl: './reserva-v-add.component.css'
})
export class ReservaVAddComponent implements OnInit {
 

  usernameU:string | null = localStorage.getItem('username')
  private fb = inject(FormBuilder)
  private router = inject(Router);
  private reservaService = inject(ReservasVendedorService)
  private productService = inject(ProductosService)
  private barriosService = inject(BarrioService)

  
  productos: Producto[] = [];
  barrios:Barrio[] = [];
  addReservaForm!: FormGroup
  productosFiltrados:Producto[] = []


  ngOnInit(): void {
    this.addReservaForm = this.fb.group({
      nombreCliente:['',[Validators.required]],
      codigoProducto: ['',[Validators.required]],
      idBarrio: ['',[Validators.required]],
      username: ['',[Validators.required]],
     
    })

    this.barriosService.getBarrios().subscribe({
      next:res => {
        this.barrios = res,
        console.log(res)
      },
      error:err => {
        console.log(err)
      }
    })

    this.productService.getProducts().subscribe({
      next:(res:Producto[]) => {
        this.productos = res
        this.productosFiltrados = this.productos.filter(p => p.estadoProducto == 0)
      
      },
      error: err =>{
          console.log(err)
      }
    })

   
  }

  

  isCompleteFullField() {

    const {nombreCliente,codigoProducto,idBarrio,username} = this.addReservaForm.value

     return nombreCliente!= '' && idBarrio!= '' && codigoProducto!= '' && username!= ''
    

    }

    agregarReserva() {
      console.log(this.addReservaForm.value)
      const newReserva = this.addReservaForm.value as addReserva
      this.reservaService.createReserva(newReserva)
      .subscribe({
        next: res => {
          console.log('reserva ingresada')
          this.router.navigateByUrl('/reservasVendedor')
        },
        error: error => {
          console.log('error al crear la reserva')
        }
      })
    }

}
