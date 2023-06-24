using Microsoft.AspNetCore.Mvc;
using Veterinaria.Interfaces;
using Veterinaria.Models;

namespace Veterinaria.Controllers
{

    /*
     Controlador donde se haran las peticiones http
     */
    [ApiController]
    [Route("api/[controller]")]
    public class MascotasController: ControllerBase
    {
        private readonly IMascotaRepository _mascotaService;

        /*
         obtener todas las mascotas
         */
        public MascotasController(IMascotaRepository mascotaService)
        {
            _mascotaService = mascotaService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Mascota>> ObtenerMascotas()
        {
            var mascotas = _mascotaService.ObtenerMascotas();
            return Ok(mascotas);
        }

        [HttpGet("{id}")]
        public ActionResult<Mascota> ObtenerMascotaId(int id)
        {
            var mascotas = _mascotaService.ObtenerMascotaId(id);
            if (mascotas == null)
            {
                return NotFound();
            }
            return Ok(mascotas);
        }

        [HttpPost]
        public IActionResult AgregarMascota([FromBody] Mascota mascota)
        {
            try
            {
                _mascotaService.AgregarMascota(mascota);
                return CreatedAtAction(nameof(ObtenerMascotaId), new { id = mascota.Id }, mascota);
            }
            catch(Exception ex)
            {
                // Manejo de la excepción
                return BadRequest("Error al agregar la mascota: " + ex.Message);
            }
            
        }

        [HttpPut("{id}")]
        public IActionResult ActualizarMascota(int id, [FromBody] Mascota mascota)
        {
            
            try
            {
                _mascotaService.ActualizarMascota(id, mascota);
                return NoContent();
            }
            catch (Exception ex)
            {
                // Manejo de la excepción
                return BadRequest("Error al Actualizar la mascota: " + ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult BorrarMascota(int id)
        {
            try
            {
                _mascotaService.BorrarMascota(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                // Manejo de la excepción
                return BadRequest("Error al Eliminar la mascota: " + ex.Message);
            }
        }

    }
}
