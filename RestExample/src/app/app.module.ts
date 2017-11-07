import { ItemsComponent } from './views/items/items.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { LastFmModule } from './modules/last-fm/last-fm.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import { PokemonPopupComponent } from './views/pokemon/pokemon-popup/pokemon-popup.component';
import { ItemPopupComponent } from './views/items/item-popup/item-popup.component';
import {CollapseModule} from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonPopupComponent,
    ItemsComponent,
    ItemPopupComponent
  ],
  imports: [
    LastFmModule,
    BrowserModule,
    FormsModule,
    BootstrapModalModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  entryComponents: [PokemonPopupComponent, ItemPopupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
