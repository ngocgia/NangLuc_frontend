import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuFormComponent } from './phieu-form.component';

describe('PhieuFormComponent', () => {
  let component: PhieuFormComponent;
  let fixture: ComponentFixture<PhieuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhieuFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhieuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
