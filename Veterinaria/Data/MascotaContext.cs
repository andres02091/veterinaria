using Microsoft.EntityFrameworkCore;
using Veterinaria.Models;

namespace Veterinaria.Data
{
    public class MascotaContext : DbContext
    {
        public MascotaContext(DbContextOptions<MascotaContext> options) : base(options)
        {
        }

        public DbSet<Mascota> Mascotas { get; set; }
    }
}
