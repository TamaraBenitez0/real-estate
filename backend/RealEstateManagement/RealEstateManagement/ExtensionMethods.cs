using RealEstateManagement.Domain;
using RealEstateManagement.DTO.BarrioDTOS;
using RealEstateManagement.DTO.ProductoDTOS;
using System.Net.NetworkInformation;

namespace RealEstateManagement
{
    public static class ExtensionMethods
    {
        public static GetProductosDTO ConvertToProductDTO(this Producto p) =>
             new(p.Codigo, p.Nombre, p.Precio, p.Descripcion, p.UrlImagen, p.EstadoProducto);


        public static GetBarrioDTO ConvertToBarrioDto(this Barrio b) =>
            new(b.IdBarrio, b.Nombre);
    }
}
