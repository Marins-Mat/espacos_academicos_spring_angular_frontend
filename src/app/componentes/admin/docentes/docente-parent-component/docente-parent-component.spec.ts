import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocenteParentComponent } from './docente-parent-component';

describe('DocenteParentComponent', () => {
  let component: DocenteParentComponent;
  let fixture: ComponentFixture<DocenteParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocenteParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
