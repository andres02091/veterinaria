using System.ComponentModel.DataAnnotations;

namespace Veterinaria.Models
{
    public class Mascota
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El campo Nombre es obligatorio.")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "El campo Especie es obligatorio.")]
        public string Especie { get; set; }

        [Required(ErrorMessage = "El campo Raza es obligatorio.")]
        public string Raza { get; set; }

        [Required(ErrorMessage = "El campo Fecha de Nacimiento es obligatorio.")]
        public DateTime FechaNacimiento { get; set; }

        [Required(ErrorMessage = "El campo IdDueño es obligatorio.")]
        public int IdDueno { get; set; }
        
    }
}
