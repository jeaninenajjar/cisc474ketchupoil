import { ItemsComponent } from './views/items/items.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'},
//  {path: 'last', loadChildren:'./modules/last-fm/last-fm.module#LastFmModule'},
  {path: 'pokemon', component: PokemonComponent },
  {path: 'item', component: ItemsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
