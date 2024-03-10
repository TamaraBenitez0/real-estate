using RealEstateManagement.Domain;

namespace RealEstateManagement.DTO.ProductoDTOS
{
    public record GetProductosDTO(Guid Codigo, string Nombre, int IdBarrio, decimal Precio, string? Descripcion, string? UrlImagen, EstadoProducto EstadoProducto);
    
}
