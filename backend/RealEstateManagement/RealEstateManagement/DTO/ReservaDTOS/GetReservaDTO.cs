using RealEstateManagement.Domain;

namespace RealEstateManagement.DTO.ReservaDTOS
{
    public record GetReservaDTO(int IdReserva,string NombreCliente,EstadoReserva EstadoReserva);
    
}
