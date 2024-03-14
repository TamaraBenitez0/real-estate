using RealEstateManagement.Domain;

namespace RealEstateManagement.DTO.ProductoDTOS
{
    public class ProductoDTO
    {
        public Guid Codigo { get; set; }
        public required string Nombre { get; set; }

        public required int IdBarrio { get; set; }

        public required decimal Precio { get; set; }

        public string? Descripcion { get; set; }

        public string? UrlImagen { get; set; }

        public EstadoProducto EstadoProducto { get; set; }
    }

    public class ProductoResponseDTO
    {
        public Guid Codigo { get; set; }
        public required string Nombre { get; set; }

        public required int IdBarrio { get; set; }

        public required decimal Precio { get; set; }

        public string? Descripcion { get; set; }

        public string? UrlImagen { get; set; }

        public EstadoProducto EstadoProducto { get; set; }
    }

    public class ProductoRequestDTO {

        public required string Nombre { get; set; }

        public required int IdBarrio { get; set; }

        public required decimal Precio { get; set; }

        public string? Descripcion { get; set; }

        public string? UrlImagen { get; set; }

       
    }
}
