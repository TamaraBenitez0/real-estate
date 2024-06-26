﻿using Carter;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO;
using RealEstateManagement.DTO.BarrioDTOS;
using RealEstateManagement.Service;

namespace RealEstateManagement.Endpoints
{
    public class BarrioEndpoints : ICarterModule
    {
        public void AddRoutes(IEndpointRouteBuilder routes)
        {
            var app = routes.MapGroup("/api/Barrio");



            app.MapGet("/", (IBarrioService barrioService) =>
            {
                var barrios = barrioService.GetBarrios();

                return Results.Ok(barrios);
            }).WithTags("Barrio").RequireAuthorization(new AuthorizeAttribute { Roles = "comercial, administrador,vendedor" });

            app.MapGet("/{idBarrio}", (int idBarrio, IBarrioService barrioService) =>
            {
                var barrio = barrioService.GetBarrio(idBarrio);

                return Results.Ok(barrio);
            }).WithTags("Barrio").RequireAuthorization(new AuthorizeAttribute { Roles = "comercial, administrador" });

            app.MapPost("/", (IBarrioService barrioService, [FromBody] BarrioRequestDTO barrioDto) =>
            {
                barrioService.CreateBarrio(barrioDto);
                return Results.Created();
            }).WithTags("Barrio").RequireAuthorization(new AuthorizeAttribute { Roles = "comercial, administrador" });



        }
    }
}
