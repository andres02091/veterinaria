using Veterinaria.Models;

namespace Veterinaria.Interfaces
{
    public interface IMascotaRepository
    {
        IEnumerable<Mascota> ObtenerMascotas();
        Mascota ObtenerMascotaId(int id);
        void AgregarMascota(Mascota pet);
        void ActualizarMascota(int id, Mascota pet);
        void BorrarMascota(int id);
    }
}
