import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info, ResultadoPeticion } from './../../../modelo/resultado-peticion';


@Injectable({
  providedIn: 'root'
})
export class ObtenerPokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  public resultado!: ResultadoPeticion;
  public informaciones : Array<Info> = [];

  constructor(
    private client: HttpClient,
  ) { }


  public obtener20Primeros(){
    this.client.get<ResultadoPeticion>(this.url).subscribe(peticion =>{
      this.resultado = peticion;
      this.informaciones.push(...peticion.results);
    });
  }

  public obtenerMasPokemones(){
    return this.client.get<ResultadoPeticion>(this.resultado.next).subscribe(peticion => {
      this.resultado = peticion;
      this.informaciones.push(...peticion.results);
    });
  }
}
