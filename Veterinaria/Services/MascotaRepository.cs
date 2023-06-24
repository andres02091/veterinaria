using Veterinaria.Data;
using Veterinaria.Interfaces;
using Veterinaria.Models;

namespace Veterinaria.Services
{
    public class MascotaRepository : IMascotaRepository
    {
        private readonly MascotaContext _context;

        public MascotaRepository(MascotaContext context)
        {
            _context = context;
        }
        public IEnumerable<Mascota> ObtenerMascotas()
        {
            return _context.Mascotas.ToList();
        }
        public Mascota ObtenerMascotaId(int id)
        {
            return _context.Mascotas.FirstOrDefault(p => p.Id == id);
        }
        public void AgregarMascota(Mascota mascota)
        {
            _context.Mascotas.Add(mascota);
            _context.SaveChanges();
        }

        public void ActualizarMascota(int id, Mascota mascota)
        {
            var existingPet = _context.Mascotas.FirstOrDefault(p => p.Id == id);
            if (existingPet != null)
            {
                existingPet.Nombre = mascota.Nombre;
                existingPet.Especie = mascota.Especie;
                existingPet.Raza = mascota.Raza;
                existingPet.FechaNacimiento = mascota.FechaNacimiento;
                existingPet.IdDueno = mascota.IdDueno;

                _context.SaveChanges();
            }
        }


        public void BorrarMascota(int id)
        {
            var pet = _context.Mascotas.FirstOrDefault(p => p.Id == id);
            if (pet != null)
            {
                _context.Mascotas.Remove(pet);
                _context.SaveChanges();
            }
        }

        

        
    }
}
