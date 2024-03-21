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

       
        public required Guid CodigoProducto { get; set; }

        [ForeignKey("IdUsuario")]
        public required Usuario Usuario { get; set; }    
    }
}
