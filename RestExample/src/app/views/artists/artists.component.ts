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
  numLoaded: number = 100;
  artists = Array<number>();
  pokeName = String;
  pokemon: any[] = [ ];
  //attributes: any[] = [ ];
  constructor(private _apiSvc: LastFmService, private _dialogService: DialogService) {
    
    for(var _i = 0; _i < this.numLoaded; _i++) {
      _apiSvc.getPokemonNew(_i+1).subscribe(x => {
      this.pokeName = x.pokemon.name;
      this.artists[x.id] = x;
      
      
      //console.log(this.artists);
      //this.attributes = x.artists['@attr'];
     });
     console.log(this.pokeName);
      console.log(this.artists);
     
     /*
     this.artists = this.artists.sort((a,b) =>{
      console.log(a,b);
      if(a.id < b.id){
        return -1;
      }
      else if(a.id > b.id){
        return 1;
      }
      else{
        return 0;
      }
    });
    */
    }
    //console.log(this.artists);
    

    

  }


  /*
  showDetail(index, artist) {
    console.log(index);
    console.log(artist.name);
    const disposable =  this._dialogService.addDialog(ArtistPopupComponent,  {
                      title: artist.name,
                      message: 'Playcount: ' + artist.playcount,
                      linkUrl: artist.url,
                      imageUrl: artist.image[2]['#text']})
                      .subscribe((isConfirmed) => {
                      });
                  setTimeout(() => {
                      disposable.unsubscribe();
                  }, 10000);
  }
*/

/*
ngOnInit(){
  console.log(this.artists);
  
}
*/
}

