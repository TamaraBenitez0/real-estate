using RealEstateManagement.Domain;

namespace RealEstateManagement.DTO.ProductoDTOS
{
    public  record PutProductoDTO(string Nombre, decimal Precio, string? Descripcion, string? UrlImagen, EstadoProducto EstadoProducto);
}
