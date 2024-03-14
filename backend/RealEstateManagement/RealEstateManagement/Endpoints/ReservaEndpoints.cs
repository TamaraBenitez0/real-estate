using Carter;
using Microsoft.EntityFrameworkCore;
using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.ReservaDTOS;
using RealEstateManagement.Service;

namespace RealEstateManagement.Endpoints
{
    public class ReservaEndpoints : ICarterModule
    {
        public void AddRoutes(IEndpointRouteBuilder routes)
        {
            var app = routes.MapGroup("/api/Reserva");

            app.MapGet("/getReservas", (IReservaService reservaService) =>
            {
                var reservas = reservaService.GetReservas(); 

                return Results.Ok(reservas);

            }).WithTags("Reserva");

            app.MapGet("/{idReserva}", (int idReserva, IReservaService reservaService) =>
            {
                var reserva = reservaService.GetReserva(idReserva);

                return Results.Ok(reserva);
            }).WithTags("Reserva");

            app.MapPost("/createReserva", (AppDbContext context,PostReserva reservaDTO) => {

                if(reservaDTO.idCliente >= 3)
                {
                    return Results.BadRequest("Maximo de reservas permitidas alcanzado");
                }
                var producto1 = context.Productos.Include(p => p.Barrio).FirstOrDefault(p => p.Codigo == reservaDTO.CodigoProducto);
                var barrio1 = context.Barrios.FirstOrDefault(b => b.IdBarrio == reservaDTO.idBarrio);
                if (producto1 == null || barrio1 == null)
                {
                    return Results.BadRequest();
                }
                var esPrecioMenor = producto1.Precio < 100000;
                var perteneceABarrio = producto1.Barrio.IdBarrio == barrio1.IdBarrio;
               
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

            app.MapPut("/{idReserva}/approve", (IReservaService reservaService, int idReserva) =>
            {

                reservaService.UpdateApprove(idReserva);

                return Results.Ok();


            }).WithTags("Reserva");

            app.MapPut("/{idReserva}/cancel", (IReservaService reservaService, int idReserva) =>
            {
                reservaService.UpdateCancel(idReserva);

                return Results.Ok();

            }).WithTags("Reserva");

            app.MapPut("/{idReserva}/decline", (IReservaService reservaService, int idReserva) =>
            {

                reservaService.UpdateDecline(idReserva);
                return Results.Ok();

            }).WithTags("Reserva");

        }

       
    }
}
