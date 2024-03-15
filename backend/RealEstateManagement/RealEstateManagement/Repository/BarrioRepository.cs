using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.BarrioDTOS;

namespace RealEstateManagement.Repository;

 public interface IBarrioRepository
{
    List<Barrio> GetBarrios();
    Barrio GetBarrio(int id);

    void AddBarrio(BarrioDTO barrioDTO);
}

public class BarrioRepository(AppDbContext context) : IBarrioRepository
{
    public void AddBarrio(BarrioDTO barrioDTO)
    {
        Barrio barrioS = new Barrio
        {
            Nombre = barrioDTO.Nombre

        };

        context.Barrios.Add(barrioS);
        context.SaveChanges();
    }

    public Barrio GetBarrio(int id)
    {
        var barrio = context.Barrios.FirstOrDefault(b => b.IdBarrio == id) ?? throw new Exception("El barrio especificado no fue encontrado.");
        return barrio;
    }

    public List<Barrio> GetBarrios()
    {
        var barrios = context.Barrios.ToList();
        return barrios;
    }
}
