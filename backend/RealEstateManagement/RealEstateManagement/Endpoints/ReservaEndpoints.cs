using Carter;
using Microsoft.EntityFrameworkCore;
using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.ReservaDTOS;

namespace RealEstateManagement.Endpoints
{
    public class ReservaEndpoints : ICarterModule
    {
        public void AddRoutes(IEndpointRouteBuilder routes)
        {
            var app = routes.MapGroup("/api/Reserva");

            app.MapGet("/getReservas", (AppDbContext context) =>
            {
                var reservas = context.Reservas.ToList(); 

                return Results.Ok(reservas);

            }).WithTags("Reserva");

            app.MapPost("/createReserva", (AppDbContext context,PostReserva reservaDTO) => {

                if(reservaDTO.idCliente >= 3)
                {
                    return Results.BadRequest("Maximo de reservas permitidas alcanzado");
                }
                var producto1 = context.Productos.FirstOrDefault(p => p.Codigo == reservaDTO.CodigoProducto);
                var barrio1 = context.Barrios.FirstOrDefault(b => b.IdBarrio == reservaDTO.idBarrio);
                if (producto1 == null || barrio1 == null)
                {
                    return Results.BadRequest();
                }
                var esPrecioMenor = producto1.Precio < 100000;
                var perteneceABarrio = producto1.Barrio == barrio1;
               
                var cantidadDeProductos = context.Productos
.Count(p => p.Barrio.IdBarrio == reservaDTO.idBarrio && p.EstadoProducto == EstadoProducto.Disponible);
                var perteneceABarrioYPrecioMenor = perteneceABarrio && esPrecioMenor;

                if(perteneceABarrioYPrecioMenor || cantidadDeProductos == 1)
                {
                    Reserva reserva1 = new Reserva {
                    NombreCliente = reservaDTO.NombreCliente,
                    EstadoReserva = Domain.EstadoReserva.Aprobada,
                    CodigoProducto = reservaDTO.CodigoProducto
                    };

                    producto1.EstadoProducto = Domain.EstadoProducto.Vendido;
                    context.Reservas.Add(reserva1);
                    context.SaveChanges();


                    return Results.Created();
                }
               

                Reserva reserva = new Reserva
                {
                    NombreCliente = reservaDTO.NombreCliente,
                    EstadoReserva = Domain.EstadoReserva.Ingresada,
                    CodigoProducto = reservaDTO.CodigoProducto

                };

               
                producto1.EstadoProducto = Domain.EstadoProducto.Reservado;


                context.Reservas.Add(reserva);
                context.SaveChanges();
                

                return Results.Created();
            }).WithTags("Reserva");

            app.MapPut("/{idReserva}/approve", (AppDbContext context, int idReserva) =>
            {
                var reserva = context.Reservas.FirstOrDefault(r => r.IdReserva == idReserva);
                if(reserva == null || reserva.EstadoReserva != EstadoReserva.Ingresada)
                {
                    return Results.BadRequest();
                }
                var producto = context.Productos.FirstOrDefault(p => p.Codigo == reserva.CodigoProducto);
                if(producto == null)
                {
                    return Results.BadRequest();
                }
                producto.EstadoProducto = Domain.EstadoProducto.Vendido;
                reserva.EstadoReserva = Domain.EstadoReserva.Aprobada;
                context.SaveChanges();

                return Results.Ok();


            }).WithTags("Reserva");

            app.MapPut("/{idReserva}/cancel", (AppDbContext context, int idReserva) =>
            {
                var reserva = context.Reservas.FirstOrDefault(r => r.IdReserva == idReserva);
                if (reserva == null || reserva.EstadoReserva != EstadoReserva.Ingresada)
                {
                    return Results.BadRequest();
                }
                var producto = context.Productos.FirstOrDefault(p => p.Codigo == reserva.CodigoProducto);
                if (producto == null)
                {
                    return Results.BadRequest();
                }

                producto.EstadoProducto = Domain.EstadoProducto.Disponible;
                reserva.EstadoReserva = Domain.EstadoReserva.Cancelada;
                context.SaveChanges();

                return Results.Ok();

            }).WithTags("Reserva");

            app.MapPut("/{idReserva}/decline", (AppDbContext context, int idReserva) =>
            {
                var reserva = context.Reservas.FirstOrDefault(r => r.IdReserva == idReserva);
                if (reserva == null || reserva.EstadoReserva != EstadoReserva.Ingresada)
                {
                    return Results.BadRequest();
                }
                var producto = context.Productos.FirstOrDefault(p => p.Codigo == reserva.CodigoProducto);
                if (producto == null)
                {
                    return Results.BadRequest();
                }

                producto.EstadoProducto = Domain.EstadoProducto.Disponible;
                reserva.EstadoReserva = Domain.EstadoReserva.Rechazada;
                context.SaveChanges();

                return Results.Ok();

            }).WithTags("Reserva");

        }

       
    }
}
