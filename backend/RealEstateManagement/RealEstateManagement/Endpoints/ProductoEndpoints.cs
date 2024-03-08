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
                var productos = context.Productos.Include(p => p.Barrio).Select(p => p.ConvertToProductDTO());

                return Results.Ok(productos);
            }).WithTags("Producto"); ;

            app.MapGet("/{codigo}", (Guid codigo, AppDbContext context) =>
            {
                var producto = context.Productos.Where(p => p.Codigo == codigo).Include(p => p.Barrio).Select(p => p.ConvertToProductDTO());
                return Results.Ok(producto);
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
                    Descripcion = productoDto.Descripcion,
                    UrlImagen = productoDto.UrlImagen,
                    EstadoProducto = Domain.EstadoProducto.Disponible

                };

                barrio.Productos.Add(producto);

                context.Productos.Add(producto);

                context.SaveChanges();

                return Results.Created();
            }).WithTags("Producto"); 

            app.MapPut("/{codigo}", (AppDbContext context, Guid codigo, PutProductoDTO productoDto) =>
            {
                var producto = context.Productos.FirstOrDefault(p => p.Codigo == codigo);

                if (producto is null)
                    return Results.BadRequest();

                producto.Nombre = productoDto.Nombre;
                producto.Precio = productoDto.Precio;
                producto.Descripcion = productoDto.Descripcion;
                producto.UrlImagen = productoDto.UrlImagen;
                producto.EstadoProducto = productoDto.EstadoProducto;
                context.SaveChanges();

                return Results.Ok();
            }).WithTags("Producto");

            app.MapDelete("/{codigo}", (AppDbContext context,Guid codigo) =>
            {
                var producto = context.Productos.FirstOrDefault(p => p.Codigo == codigo);
                if (producto is null)
                    return Results.BadRequest();

                context.Productos.Remove(producto);

                context.SaveChanges();
                return Results.NoContent();
            }).WithTags("Producto");
        }
    }
}
