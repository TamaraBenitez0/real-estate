using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealEstateManagement.Domain
{
    [Table("Reserva")]
    public class Reserva
    {
        [Key]
        public int IdReserva {  get; set; }

        public required string NombreCliente { get; set; }

        public EstadoReserva EstadoReserva { get; set; }

        [ForeignKey("Codigo")]
        public required Producto Producto { get; set; }  
    }
}
