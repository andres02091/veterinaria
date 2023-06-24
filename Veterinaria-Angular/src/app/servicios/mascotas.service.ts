import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../modelos/mascota';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private apiUrl = environment.apiUrl+"/mascotas"; 

  constructor(private http: HttpClient) { }

  obtenerMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.apiUrl);
  }

  obtenerMascotasId(id:any): Observable<Mascota> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Mascota>(url);
  }

  crearMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(this.apiUrl, mascota);
  }

  actualizarMascota(mascota: Mascota): Observable<Mascota> {
    const url = `${this.apiUrl}/${mascota.id}`;
    return this.http.put<Mascota>(url, mascota);
  }

  eliminarMascota(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
