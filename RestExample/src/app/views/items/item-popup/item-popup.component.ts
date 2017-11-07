import { Component } from '@angular/core';
import { DialogComponent,  DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title: string;
  message: string;
  imageUrl: string;
  linkUrl: string;
}
@Component({
    selector: 'app-itempopup',
    templateUrl: './item-popup.component.html',
    styleUrls: ['./item-popup.component.css']

})
export class ItemPopupComponent extends DialogComponent<ConfirmModel,  boolean> implements ConfirmModel {
  title:  string;
  message:  string;
  imageUrl: string;
  linkUrl: string;

 constructor(dialogService:  DialogService) {
    super(dialogService);
  }
  confirm() {
    this.close();
  }
}
