import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanupProductsComponent } from './cleanup-products.component';

describe('CleanupProductsComponent', () => {
  let component: CleanupProductsComponent;
  let fixture: ComponentFixture<CleanupProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanupProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanupProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
