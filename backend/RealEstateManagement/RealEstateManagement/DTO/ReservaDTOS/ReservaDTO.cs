using RealEstateManagement.Domain;

namespace RealEstateManagement.DTO.ReservaDTOS
{
    public class ReservaDTO
    {
        public int IdReserva { get; set; }

        public required string NombreCliente { get; set; }

        public EstadoReserva EstadoReserva { get; set; }


        public required Guid CodigoProducto { get; set; }

        public required string Username { get; set; }
    }

    public class ReservaResponseDTO
    {

        public int IdReserva { get; set; }

        public required string NombreCliente { get; set; }

        public EstadoReserva EstadoReserva { get; set; }


        public required Guid CodigoProducto { get; set; }

        public required string Username { get; set; }

    }

    public class ReservaRequestDTO
    {
        public required string NombreCliente { get; set; }

        public required Guid CodigoProducto { get; set; }

        public required int IdBarrio { get; set; }

        public required string Username { get; set; }

    }
}
