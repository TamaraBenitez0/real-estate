using RealEstateManagement.Domain;

namespace RealEstateManagement.DTO.ReservaDTOS
{
    public record PostReserva(string NombreCliente, Guid CodigoProducto,int idCliente,int idBarrio);
    
}
