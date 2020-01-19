import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDetailContainerComponent } from './type-detail-container.component';

describe('TypeDetailContainerComponent', () => {
  let component: TypeDetailContainerComponent;
  let fixture: ComponentFixture<TypeDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
