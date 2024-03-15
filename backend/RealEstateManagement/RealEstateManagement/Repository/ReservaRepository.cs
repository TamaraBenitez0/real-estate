using Microsoft.EntityFrameworkCore;
using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.ReservaDTOS;

namespace RealEstateManagement.Repository;

public interface IReservaRepository
{
    List<Reserva> GetReservas();

    Reserva GetReserva(int id);

    void AddReserva(ReservaDTO reservaDTO,int idUsuario,int idBarrio);

    void UpdateApprove(int idReserva);

    void UpdateCancel(int idReserva);

    void UpdateDecline(int idReserva);

}


public class ReservaRepository(AppDbContext context) : IReservaRepository
{
    public void AddReserva(ReservaDTO reservaDTO, int idUsuario, int idBarrio)
    {
        if (idUsuario >= 3)
        {
            throw new Exception("Maximo de reservas permitidas alcanzado");
        }
        var producto1 = context.Productos.Include(p => p.Barrio).FirstOrDefault(p => p.Codigo == reservaDTO.CodigoProducto);
        var barrio1 = context.Barrios.FirstOrDefault(b => b.IdBarrio == idBarrio);
        if (producto1 == null || barrio1 == null)
        {
            throw new Exception("El producto y/o barrio no existen");
        }
        var esPrecioMenor = producto1.Precio < 100000;
        var perteneceABarrio = producto1.Barrio.IdBarrio == barrio1.IdBarrio;

        var cantidadDeProductos = context.Productos
.Count(p => p.Barrio.IdBarrio == idBarrio && p.EstadoProducto == EstadoProducto.Disponible);
        var perteneceABarrioYPrecioMenor = perteneceABarrio && esPrecioMenor;

                    if (perteneceABarrioYPrecioMenor || cantidadDeProductos == 1)
                    {
                        Reserva reserva1 = new Reserva
                        {
                            NombreCliente = reservaDTO.NombreCliente,
                            EstadoReserva = Domain.EstadoReserva.Aprobada,
                            CodigoProducto = reservaDTO.CodigoProducto
                        };

                        producto1.EstadoProducto = Domain.EstadoProducto.Vendido;
                        context.Reservas.Add(reserva1);
                        context.SaveChanges();
                         
                        }
                    else {


                        Reserva reserva = new Reserva
                        {
                            NombreCliente = reservaDTO.NombreCliente,
                            EstadoReserva = Domain.EstadoReserva.Ingresada,
                            CodigoProducto = reservaDTO.CodigoProducto

                        };


                        producto1.EstadoProducto = Domain.EstadoProducto.Reservado;


                        context.Reservas.Add(reserva);
                        context.SaveChanges();



        }
                
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
