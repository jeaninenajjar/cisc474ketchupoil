import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class LastFmService {
  baseUri: string;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }

  getPokemon = () => this.http.get(
    this.baseUri + "pokemon/" + "?limit=100",
      { headers: this.headers }).map(x => {
        console.log(x.json());
        return x.json();
        
      })


      getPokemonDetails = (link: string) => this.http.get(
        link + "?limit=100",
          { headers: this.headers }).map(x => {
            console.log(x.json());
            return x.json();
            
          })

          getItemDetails = (link: string) => this.http.get(
            link + "?limit=100",
              { headers: this.headers }).map(x => {
                console.log(x.json());
                return x.json();
                
              })
      
    getItems = () => this.http.get(
      this.baseUri + "item/" + "?limit=100",
        { headers: this.headers }).map(x => {
          console.log(x.json());
          return x.json();
            
        })
        


}
