using Carter;
using Microsoft.EntityFrameworkCore;
using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO;
using RealEstateManagement.DTO.BarrioDTOS;

namespace RealEstateManagement.Endpoints
{
    public class BarrioEndpoints : ICarterModule
    {
        public void AddRoutes(IEndpointRouteBuilder routes)
        {
            var app = routes.MapGroup("/api/Barrio");


            app.MapGet("/", (AppDbContext context) =>
            {
                var barrios = context.Barrios.Select(b => b.ConvertToBarrioDto());

                return Results.Ok(barrios);
            }).WithTags("Barrio"); ;

            app.MapGet("/{idBarrio}", (int idBarrio, AppDbContext context) =>
            {
                var barrio = context.Barrios.FirstOrDefault(b => b.IdBarrio == idBarrio);

                if (barrio == null)
                {

                    return Results.NotFound("El barrio especificado no fue encontrado.");
                }
                return Results.Ok(barrio.ConvertToBarrioDto());
            }).WithTags("Barrio");

            app.MapPost("/", (AppDbContext context, PostBarrioDTO barrioDto) =>
            {
                Barrio barrioS = new Barrio
                {
                    Nombre = barrioDto.Nombre

                };

                context.Barrios.Add(barrioS);
                context.SaveChanges();
                return Results.Created();
            }).WithTags("Barrio");


  
        }
    }
}
