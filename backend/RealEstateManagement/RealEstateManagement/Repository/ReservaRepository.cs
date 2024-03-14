using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.ReservaDTOS;

namespace RealEstateManagement.Repository;

public interface IReservaRepository
{
    List<Reserva> GetReservas();

    Reserva GetReserva(int id);

    void AddReserva(ReservaDTO reservaDTO);

    void UpdateApprove(int idReserva);

    void UpdateCancel(int idReserva);

    void UpdateDecline(int idReserva);

}


public class ReservaRepository(AppDbContext context) : IReservaRepository
{
    public void AddReserva(ReservaDTO reservaDTO)
    {
        throw new NotImplementedException();
    }

    public Reserva GetReserva(int id)
    {
        var reserva = context.Reservas.FirstOrDefault(r => r.IdReserva == id);

        if(reserva == null)
        {
            throw new Exception($"La reserva con ID {id} no existe.");
        }

        return reserva;
    }

    public List<Reserva> GetReservas()
    {
        var reservas = context.Reservas.ToList();

        return reservas;
    }

    public void UpdateApprove(int idReserva)
    {
        var reserva = context.Reservas.FirstOrDefault(r => r.IdReserva == idReserva);
        if (reserva == null || reserva.EstadoReserva != EstadoReserva.Ingresada)
        {
            throw new Exception($"La reserva con ID {idReserva} no existe o su estado no es Ingresada.");
        }
        var producto = context.Productos.FirstOrDefault(p => p.Codigo == reserva.CodigoProducto) ?? throw new Exception("El codigo del producto asociado a esta reserva no existe.");
        producto.EstadoProducto = Domain.EstadoProducto.Vendido;
        reserva.EstadoReserva = Domain.EstadoReserva.Aprobada;
        context.SaveChanges();
    }

    public void UpdateCancel(int idReserva)
    {
        var reserva = context.Reservas.FirstOrDefault(r => r.IdReserva == idReserva);
        if (reserva == null || reserva.EstadoReserva != EstadoReserva.Ingresada)
        {
            throw new Exception($"La reserva con ID {idReserva} no existe o su estado no es Ingresada.");
        }
        var producto = context.Productos.FirstOrDefault(p => p.Codigo == reserva.CodigoProducto) ?? throw new Exception("El codigo del producto asociado a esta reserva no existe.");
        producto.EstadoProducto = Domain.EstadoProducto.Disponible;
        reserva.EstadoReserva = Domain.EstadoReserva.Cancelada;
        context.SaveChanges();
    }

    public void UpdateDecline(int idReserva)
    {
        var reserva = context.Reservas.FirstOrDefault(r => r.IdReserva == idReserva);
        if (reserva == null || reserva.EstadoReserva != EstadoReserva.Ingresada)
        {
            throw new Exception($"La reserva con ID {idReserva} no existe o su estado no es Ingresada.");
        }
        var producto = context.Productos.FirstOrDefault(p => p.Codigo == reserva.CodigoProducto) ?? throw new Exception("El codigo del producto asociado a esta reserva no existe.");
        producto.EstadoProducto = Domain.EstadoProducto.Disponible;
        reserva.EstadoReserva = Domain.EstadoReserva.Rechazada;
        context.SaveChanges();
    }
}
