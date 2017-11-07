import { DialogService } from 'ng2-bootstrap-modal';
import { LastFmService } from '../../modules/last-fm/last-fm.service';
import { Component, OnInit } from '@angular/core';
import {PokemonPopupComponent} from './pokemon-popup/pokemon-popup.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})



export class PokemonComponent {
  pokemon: any[] = [ ];
  poke: any;
  pokes: any[] = new Array(0);
  _apiSVC: LastFmService;

  
  constructor(private _apiSvc: LastFmService, private _dialogService: DialogService) {
    console.log(this.pokes.length);
    this._apiSVC = _apiSvc;
    
    _apiSvc.getPokemon().subscribe(x => {
      this.pokemon = x.results;

      

      if(this.pokemon == x.results) {
        var x: any;
        for (var _i = 0; _i < this.pokemon.length; _i++) {
          x = _i+1;
          this.pokemon[_i].sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + x + ".png";
        }
      }


      });


      console.log(this.pokes);

  }

  finish(index, input) {
    console.log(this._apiSVC);
    console.log(this.poke);
    
    var types = '';
    for (var _i = 0; _i < this.poke.types.length; _i++) {
      types += this.poke.types[_i].type.name;
      console.log(this.poke.types[_i]);
      if (_i != (this.poke.types.length-1)) {
        types += ' and ';
      }
    }


    const disposable =  this._dialogService.addDialog(PokemonPopupComponent,  {
                      title: input.name,
                      message: 'I am a ' + types + ' type', 
                      linkUrl: input.url,
                      imageUrl: this.poke.sprites.front_default})
                      .subscribe((isConfirmed) => {
                      });
                  setTimeout(() => {
                      disposable.unsubscribe();
                  }, 10000);
  }
  
  showDetail(index, input) {
    console.log(index);
    console.log(input.name);

    this._apiSVC.getPokemonDetails(input.url).subscribe(x => {
      this.poke = x;
      if (this.poke== x) {
        this.finish(index, input);
      }

    });


  }





}
