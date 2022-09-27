import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
   loadChildren: () => import('./paginas/pokemones/pokemones.module').then(p => p.PokemonesPageModule)
  },
  {
    path: ':nombrePokemon',
    loadChildren: () => import('./paginas/pokemon/pokemon.module').then(p => p.PokemonPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
