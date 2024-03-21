using Mapster;
using RealEstateManagement.DTO.ProductoDTOS;
using RealEstateManagement.DTO.ReservaDTOS;
using RealEstateManagement.Repository;

namespace RealEstateManagement.Service;
public interface IReservaService
{
    List<ReservaResponseDTO> GetReservas();
    ReservaResponseDTO GetReserva(int idReserva);

    void CreateReserva(ReservaRequestDTO reservaDTO);

    void UpdateApprove(int idReserva);

    void UpdateCancel(int idReserva);  

    void UpdateDecline(int idReserva);
}

public class ReservaService(IReservaRepository reservaRepository) : IReservaService
{
    public void CreateReserva(ReservaRequestDTO reservaDTO)
    {
        reservaRepository.AddReserva(reservaDTO.Adapt<ReservaDTO>(),reservaDTO.IdBarrio);
    }

    public ReservaResponseDTO GetReserva(int idReserva)
    {
        return reservaRepository.GetReserva(idReserva).Adapt<ReservaResponseDTO>();
    }

    public List<ReservaResponseDTO> GetReservas()
    {
        return reservaRepository.GetReservas().Adapt<List<ReservaResponseDTO>>();
    }

    public void UpdateApprove(int idReserva)
    {
        reservaRepository.UpdateApprove(idReserva);
    }

    public void UpdateCancel(int idReserva)
    {
        reservaRepository.UpdateCancel(idReserva);
    }

    public void UpdateDecline(int idReserva)
    {
        reservaRepository.UpdateDecline(idReserva);
    }
}
