using Carter;
using Microsoft.EntityFrameworkCore;
using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.ProductoDTOS;

namespace RealEstateManagement.Endpoints
{
    public class ProductoEndpoints : ICarterModule
    {

       
        public void AddRoutes(IEndpointRouteBuilder routes)
        {
            var app = routes.MapGroup("/api/Producto");

        

            app.MapGet("/getProducts", (AppDbContext context) =>
            {
                var productos = context.Productos.Select(p => p.ConvertToProductDTO());

                return Results.Ok(productos);
            }).WithTags("Producto"); ;

            app.MapGet("/{idProducto}", (int idProducto) =>
            {
                return Results.Ok();
            }).WithTags("Producto");

            app.MapPost("/", (AppDbContext context, PostProductoDTO productoDto) =>
            {
                var barrio = context.Barrios.FirstOrDefault(b => b.IdBarrio == productoDto.IdBarrio);

                if (barrio == null)
                {
                    
                    return Results.NotFound("El barrio especificado no fue encontrado.");
                }

                Producto producto = new Producto
                {
                    
                    Nombre = productoDto.Nombre,
                    Barrio = barrio,
                    Precio = productoDto.Precio,
                    EstadoProducto = Domain.EstadoProducto.Disponible

                };

                barrio.Productos.Add(producto);

                context.Productos.Add(producto);

                context.SaveChanges();

                return Results.Created();
            }).WithTags("Producto"); 

            app.MapPut("/{idProducto}", (int idProducto) =>
            {
                return Results.Ok();
            }).WithTags("Producto");

            app.MapDelete("/{idProducto}", (int idProducto) =>
            {
                return Results.NoContent();
            }).WithTags("Producto");
        }
    }
}
