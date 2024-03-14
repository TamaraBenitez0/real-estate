using Mapster;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.ProductoDTOS;

namespace RealEstateManagement.Mappers
{
    public class ProductoMapper : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<Producto, ProductoResponseDTO>().Map(des => des.Codigo, src => src.Codigo)
                .Map(des => des.Nombre, src => src.Nombre)
                .Map(des => des.IdBarrio, src => src.Barrio.IdBarrio)
                 .Map(des => des.Precio, src => src.Precio)
                 .Map(des => des.Descripcion, src => src.Descripcion)
                 .Map(des => des.UrlImagen, src => src.UrlImagen)
                 .Map(des => des.EstadoProducto, src => src.EstadoProducto);
        }
    }
}
