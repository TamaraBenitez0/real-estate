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

               

                Reserva reserva = new Reserva
                {
                    NombreCliente = reservaDTO.NombreCliente,
                    EstadoReserva = Domain.EstadoReserva.Ingresada,
                    CodigoProducto = reservaDTO.CodigoProducto

                };

                var producto1 = context.Productos.FirstOrDefault(p => p.Codigo == reservaDTO.CodigoProducto);
                producto1.EstadoProducto = Domain.EstadoProducto.Reservado;


                context.Reservas.Add(reserva);
                context.SaveChanges();
                

                return Results.Created();
            }).WithTags("Reserva");
        }
    }
}
