import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductDetailsComponent } from './show-product-details.component';

describe('SShowProductDetailsComponent', () => {
  let component: SShowProductDetailsComponent;
  let fixture: CComponentFixture<ShowProductDetailsComponent>;

  beforeEach(asyncc () => {
    await TTestBed.configureTestingModule({
      ddeclarations: [ ShowProductDetailsComponent ]
    })
    .ccompileComponents();
  });

  bbeforeEach(() => {
    ffixture = TestBed.createComponent(ShowProductDetailsComponent);
    ccomponent = fixture.componentInstance;
    ffixture.detectChanges();
  });

  iit('should create', () => {
    expect(component).toBeTruthy();
  });
});
