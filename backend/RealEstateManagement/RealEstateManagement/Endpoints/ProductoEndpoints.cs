using Carter;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.ProductoDTOS;
using RealEstateManagement.Service;

namespace RealEstateManagement.Endpoints
{
    public class ProductoEndpoints : ICarterModule
    {


        public void AddRoutes(IEndpointRouteBuilder routes)
        {
            var app = routes.MapGroup("/api/Producto");



            app.MapGet("/getProducts", (IProductoService productoService) =>
            {
                var productos = productoService.GetProductos();

                return Results.Ok(productos);

            }).WithTags("Producto"); ;

            app.MapGet("/{codigo}", (Guid codigo, IProductoService productoService) =>
            {
                var producto = productoService.GetProducto(codigo);
                return Results.Ok(producto);

            }).WithTags("Producto");

            app.MapPost("/", (IProductoService productoService, [FromBody] ProductoRequestDTO productoDto) =>
            {
                productoService.CreateProducto(productoDto);

                return Results.Created();
            }).WithTags("Producto"); 

            app.MapPut("/{codigo}", (IProductoService productoService, Guid codigo, [FromBody] ProductoRequestDTO productoDto) =>
            {
                productoService.UpdateProducto(codigo, productoDto);
                return Results.Ok();
            }).WithTags("Producto");

            app.MapDelete("/{codigo}", (IProductoService productoService, Guid codigo) =>
            {
                productoService.DeleteProducto(codigo);
                return Results.NoContent();
            }).WithTags("Producto");
        }
    }
}
