using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealEstateManagement.Domain
{
    [Table("Rol")]
    public class Rol
    {
        [Key]
        public int IdRol { get; set; }

        public string Name { get; set; } = null!;

        public List<Usuario> Usuarios { get; } = [];
    }
}
