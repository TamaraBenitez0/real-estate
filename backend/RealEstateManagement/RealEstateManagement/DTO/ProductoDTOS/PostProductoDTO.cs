using RealEstateManagement.Domain;

namespace RealEstateManagement.DTO.ProductoDTOS
{
    public record PostProductoDTO(string Nombre, int IdBarrio, decimal Precio, string? Descripcion, string? UrlImagen);

}
