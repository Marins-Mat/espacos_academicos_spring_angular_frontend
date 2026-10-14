import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColaboradorSidebarComponent } from './colaborador-sidebar-component';

describe('ColaboradorSidebarComponent', () => {
  let component: ColaboradorSidebarComponent;
  let fixture: ComponentFixture<ColaboradorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColaboradorSidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
