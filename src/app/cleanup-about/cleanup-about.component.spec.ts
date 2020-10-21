import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanupAboutComponent } from './cleanup-about.component';

describe('CleanupAboutComponent', () => {
  let component: CleanupAboutComponent;
  let fixture: ComponentFixture<CleanupAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanupAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanupAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
