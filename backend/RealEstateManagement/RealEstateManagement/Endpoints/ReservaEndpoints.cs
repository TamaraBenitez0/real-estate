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
                //var reservas = context.Reservas.Include(r => r.Producto).Select(p => p.ConvertToReservaDTO()); 

                return Results.Ok();

            }).WithTags("Reservas");

            app.MapPost("/{codigo}/createReserva", (AppDbContext context,PostReserva reservaDTO, Guid codigo) => {

                var producto = context.Productos.FirstOrDefault(p => p.Codigo == codigo);

                if (producto != null)
                {
                    return Results.NotFound("El producto especificado no fue encontrado.");
                }

                //Reserva reserva = new Reserva
                //{
                //    NombreCliente = reservaDTO.NombreCliente,
                //    EstadoReserva = Domain.EstadoReserva.Ingresada,
                //    Producto = producto
                //};

                //producto.Reserva = reserva;
                //context.Reservas.Add(reserva);
                //context.SaveChanges();

                return Results.Created();
            }).WithTags("Reserva");
        }
    }
}
