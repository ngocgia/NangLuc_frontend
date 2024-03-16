import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuComponent } from './phieu.component';

describe('PhieuComponent', () => {
  let component: PhieuComponent;
  let fixture: ComponentFixture<PhieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhieuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
