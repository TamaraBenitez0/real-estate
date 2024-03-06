using RealEstateManagement.Domain;

namespace RealEstateManagement.DTO.ProductoDTOS
{
    public record GetProductosDTO(Guid Codigo, string Nombre, decimal Precio, string? Descripcion, string? UrlImagen, EstadoProducto EstadoProducto);
    
}
