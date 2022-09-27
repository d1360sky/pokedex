import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//NAVEGACION
import { RouterModule } from '@angular/router';
//PETICIONES A INTERNET
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';
import { PokemonesPageRoutingModule } from './pokemones-routing.module';
import { PokemonesPage } from './pokemones.page';
import { InfoPokemonComponent } from './componentes/info-pokemon/info-pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesPageRoutingModule,
    RouterModule,
    HttpClientModule,

  ],
  declarations: [PokemonesPage,InfoPokemonComponent]
})
export class PokemonesPageModule {}
