using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealEstateManagement.Domain
{
    [Table("Barrio")]
    [Index(nameof(Nombre), IsUnique = true)]
    public class Barrio
    {

        [Key]
        public int IdBarrio {  get; set; }

       
        public required string Nombre { get; set; }


        public List<Producto> Productos { get; set; } = [];
    }
}
