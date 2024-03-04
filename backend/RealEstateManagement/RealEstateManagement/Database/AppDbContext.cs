using Microsoft.EntityFrameworkCore;
using RealEstateManagement.Domain;

namespace RealEstateManagement.Database
{
    public class AppDbContext(DbContextOptions<AppDbContext>options):DbContext(options)
    {
        public DbSet<Producto> Productos { get; set; }

        public DbSet<Reserva> Reservas { get; set; }

        public DbSet<Barrio> Barrios { get; set; }


    }
}
