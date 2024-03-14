using Mapster;
using RealEstateManagement.DTO.BarrioDTOS;
using RealEstateManagement.Repository;

namespace RealEstateManagement.Service;

public interface IBarrioService
{
    List<BarrioResponseDTO> GetBarrios();
    BarrioResponseDTO GetBarrio(int id);
    void CreateBarrio(BarrioRequestDTO barrioDTO);
}

public class BarrioService(IBarrioRepository barrioRepository): IBarrioService
{
    public void CreateBarrio(BarrioRequestDTO barrioDTO)
    {
        barrioRepository.AddBarrio(barrioDTO.Adapt<BarrioDTO>());
    }

    public BarrioResponseDTO GetBarrio(int id)
    {
        return barrioRepository.GetBarrio(id).Adapt<BarrioResponseDTO>();
    }

    public List<BarrioResponseDTO> GetBarrios()
    {
        return barrioRepository.GetBarrios().Adapt<List<BarrioResponseDTO>>();
    }
}
