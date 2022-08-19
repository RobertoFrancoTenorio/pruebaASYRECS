import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACERCADEComponent } from './acerca-de.component';

describe('ACERCADEComponent', () => {
  let component: ACERCADEComponent;
  let fixture: ComponentFixture<ACERCADEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACERCADEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACERCADEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
