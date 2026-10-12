import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoParentComponent } from './curso-parent-component';

describe('CursoParentComponent', () => {
  let component: CursoParentComponent;
  let fixture: ComponentFixture<CursoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CursoParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
