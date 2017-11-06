import { DialogService } from 'ng2-bootstrap-modal';
import { LastFmService } from '../../modules/last-fm/last-fm.service';
import { Component, OnInit } from '@angular/core';
import {ArtistPopupComponent} from './artist-popup/artist-popup.component';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})


export class ArtistsComponent {
  artists: any[] = [ ];
  pokemon: any;
  pokemons: any[] = new Array(0);
  _apiSVC: LastFmService;

  
  //attributes: any[] = [ ];
  constructor(private _apiSvc: LastFmService, private _dialogService: DialogService) {
    console.log(this.pokemons.length);
    this._apiSVC = _apiSvc;
    
    _apiSvc.getPokemon().subscribe(x => {
      this.artists = x.results;

      

      if(this.artists == x.results) {
        var x: any;
        for (var _i = 0; _i < this.artists.length; _i++) {
          x = _i+1;
          this.artists[_i].sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + x + ".png";
        }
      }

        //return temp;
/*         for(let artist of this.artists) {
          _apiSvc.getPokemonDetails(artist.url).subscribe( y => {
              if(y.id == (this.pokemons.length + 1 )) {
                this.pokemons.push(y.sprites); 
              }

              
          });
        } */
      });


      console.log(this.pokemons);
/*       this.pokemon = this.artists.map(function(z) {
        _apiSvc.getPokemonDetails(z.url).subscribe(y => {
           this.temporary = y.sprites;
        });
        return this.temporary;
      }); */
/*       for (var i = 0; i < this.artists.length; i++) {
        _apiSvc.getPokemonDetails(this.artists[i].url).subscribe(y => {
          this.artists[i] = y.sprites;
          this.pokemon.push(y.sprites);
          console.log(y.sprites);
        });
      } */
      //this.attributes = x.artists['@attr'];

  }


  makePokemons(index) {
    if (index == this.artists.length) {
      return;
    }
    this._apiSVC.getPokemonForms(this.artists[index].url).subscribe( y => {
      this.pokemons.push(y.sprites);
      if(this.pokemons.length == y.id) {
        this.makePokemons(index+1);
      }
    });
  }

  finish(index, artist) {
    console.log(this._apiSVC);
    console.log(this.pokemon);
    
    var types = '';
    for (var _i = 0; _i < this.pokemon.types.length; _i++) {
      types += this.pokemon.types[_i].type.name;
      console.log(this.pokemon.types[_i]);
      if (_i != (this.pokemon.types.length-1)) {
        types += ' and ';
      }
    }


    const disposable =  this._dialogService.addDialog(ArtistPopupComponent,  {
                      title: artist.name,
                      message: 'I am a ' + types + ' type', 
                      linkUrl: artist.url,
                      imageUrl: this.pokemon.sprites.front_default})
                      .subscribe((isConfirmed) => {
                      });
                  setTimeout(() => {
                      disposable.unsubscribe();
                  }, 10000);
  }
  
  showDetail(index, artist) {
    console.log(index);
    console.log(artist.name);

    this._apiSVC.getPokemonDetails(artist.url).subscribe(x => {
      this.pokemon = x;
      if (this.pokemon== x) {
        this.finish(index, artist);
      }

    });


  }





}
