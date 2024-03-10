using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealEstateManagement.Domain
{

    [Table("Producto")]
    public class Producto
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Codigo { get; set; }

        [StringLength(30)]
        public required string Nombre { get; set; }

        [ForeignKey("IdBarrio")]
        public required Barrio Barrio { get; set; }

        public required decimal Precio { get; set; }

        [StringLength(100)]
        public string? Descripcion { get; set; }

        [StringLength(200)]
        public string? UrlImagen { get; set; }

        public EstadoProducto EstadoProducto { get; set; }

        


    }
}
