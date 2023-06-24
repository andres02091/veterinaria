import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasFormComponent } from './mascotas-form.component';

describe('MascotasFormComponent', () => {
  let component: MascotasFormComponent;
  let fixture: ComponentFixture<MascotasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasFormComponent]
    });
    fixture = TestBed.createComponent(MascotasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
