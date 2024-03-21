using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace RealEstateManagement.Domain

{
    [Table("Usuario")]
    [Index(nameof(Username), IsUnique = true)]
    public class Usuario
    {
        [Key]
        public int IdUsuario { get; set; }

        public string Name { get; set; } = null!;

        public string Username { get; set; } = null!;

        public byte[] PasswordHash { get; set; } = null!;

        public byte[] PasswordSalt { get; set; } = null!;

        public List<Rol> Roles { get; } = [];

        public List<Reserva> Reservas { get; set; } = [];
    }
}
