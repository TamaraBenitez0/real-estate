using Carter;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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

            }).WithTags("Producto").RequireAuthorization(new AuthorizeAttribute { Roles = "vendedor, administrador" });



            app.MapGet("/{codigo}", (Guid codigo, IProductoService productoService) =>
            {
                var producto = productoService.GetProducto(codigo);
                return Results.Ok(producto);

            }).WithTags("Producto").RequireAuthorization(new AuthorizeAttribute { Roles = "vendedor, administrador" });



            app.MapPost("/", (IProductoService productoService, [FromBody] ProductoRequestDTO productoDto) =>
            {
                productoService.CreateProducto(productoDto);

                return Results.Created();
            }).WithTags("Producto").RequireAuthorization(new AuthorizeAttribute { Roles = "vendedor, administrador" });



            app.MapPut("/{codigo}", (IProductoService productoService, Guid codigo, [FromBody] ProductoRequestDTO productoDto) =>
            {
                productoService.UpdateProducto(codigo, productoDto);
                return Results.Ok();
            }).WithTags("Producto").RequireAuthorization(new AuthorizeAttribute { Roles = "vendedor, administrador" });



            app.MapDelete("/{codigo}", (IProductoService productoService, Guid codigo) =>
            {
                productoService.DeleteProducto(codigo);
                return Results.NoContent();
            }).WithTags("Producto").RequireAuthorization(new AuthorizeAttribute { Roles = "vendedor, administrador" });
        }
    }
}
