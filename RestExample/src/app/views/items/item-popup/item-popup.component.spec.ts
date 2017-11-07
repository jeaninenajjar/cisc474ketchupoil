import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPopupComponent } from './item-popup.component';

describe('ItemPopupComponent', () => {
  let component: ItemPopupComponent;
  let fixture: ComponentFixture<ItemPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
