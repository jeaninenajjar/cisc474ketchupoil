import { Http, HttpModule } from '@angular/http';
import { LastFmService } from './last-fm.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function lastFMfactory(http: Http){
  return new LastFmService(http, 'https://pokeapi.co/api/v2/');
}

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [{provide: LastFmService, useFactory: lastFMfactory, deps: [Http]}],
  declarations: []
})
export class LastFmModule { }
