using Mapster;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.ReservaDTOS;

namespace RealEstateManagement.Mappers
{
    public class ReservaMapper : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<Reserva, ReservaResponseDTO>().Map(des => des.IdReserva, src => src.IdReserva)
                .Map(des => des.NombreCliente, src => src.NombreCliente)
                .Map(des => des.EstadoReserva, src => src.EstadoReserva)
                .Map(des => des.CodigoProducto, src => src.CodigoProducto)
                .Map(des => des.Username, src => src.Usuario.Username);
        }
    }
}
