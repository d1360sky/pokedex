import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info, ResultadoPeticion } from './../../modelo/resultado-peticion';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  public resultado!: ResultadoPeticion;
  private url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get<ResultadoPeticion>(this.url).subscribe(peticion =>{
      this.resultado = peticion;
      console.log('',peticion)
    })
  }

}
