import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasTablaComponent } from './mascotas-tabla.component';

describe('MascotasTablaComponent', () => {
  let component: MascotasTablaComponent;
  let fixture: ComponentFixture<MascotasTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasTablaComponent]
    });
    fixture = TestBed.createComponent(MascotasTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
