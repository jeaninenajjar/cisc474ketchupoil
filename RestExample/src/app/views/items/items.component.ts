import { DialogService } from 'ng2-bootstrap-modal';
import { LastFmService } from './../../modules/last-fm/last-fm.service';
import { Component, OnInit } from '@angular/core';
import {ItemPopupComponent} from './item-popup/item-popup.component';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any[] = [ ];
  item: any;
  _apiSVC: LastFmService;
  selectedItem = -1;
  constructor(private _apiSvc: LastFmService, private _dialogService: DialogService) {
    this._apiSVC = _apiSvc;
    _apiSvc.getItems().subscribe(x => {
      this.items = x.results;

      if(this.items == x.results) {
        var x: any;
        for (let item of this.items) {
          item.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" + item.name + ".png"
        }
      }

     });
     
  }
    ngOnInit() {
  }


  finish(index, input) {
    console.log(this._apiSVC);
    console.log(this.item);
    
    var effects = '';
    for (var _i = 0; _i < this.item.effect_entries.length; _i++) {
      effects += this.item.effect_entries[_i].short_effect;
      console.log(this.item.effect_entries[_i]);
      if (_i != (this.item.effect_entries.length-1)) {
        effects += ' AND ';
      }
    }


    const disposable =  this._dialogService.addDialog(ItemPopupComponent,  {
                      title: input.name,
                      message: effects, 
                      linkUrl: input.url,
                      imageUrl: this.item.sprites.default})
                      .subscribe((isConfirmed) => {
                      });
                  setTimeout(() => {
                      disposable.unsubscribe();
                  }, 10000);
  }
  
  showDetail(index, input) {
    console.log(index);
    console.log(input.name);

    this._apiSVC.getItemDetails(input.url).subscribe(x => {
      this.item = x;
      if (this.item== x) {
        this.finish(index, input);
      }

    });


  }

}
