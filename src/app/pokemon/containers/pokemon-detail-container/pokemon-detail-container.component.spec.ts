import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailContainerComponent } from './pokemon-detail-container.component';

describe('PokemonDetailContainerComponent', () => {
  let component: PokemonDetailContainerComponent;
  let fixture: ComponentFixture<PokemonDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
