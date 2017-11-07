import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPopupComponent } from './pokemon-popup.component';

describe('PokemonPopupComponent', () => {
  let component: PokemonPopupComponent;
  let fixture: ComponentFixture<PokemonPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
