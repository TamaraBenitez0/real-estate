using Carter;
using Microsoft.AspNetCore.Mvc;
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

            app.MapPost("/createReserva", (IReservaService reservaService, [FromBody] ReservaRequestDTO reservaDTO) => {


                reservaService.CreateReserva(reservaDTO);

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
