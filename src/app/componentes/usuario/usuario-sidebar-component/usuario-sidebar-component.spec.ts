import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioSidebarComponent } from './usuario-sidebar-component';

describe('UsuarioSidebarComponent', () => {
  let component: UsuarioSidebarComponent;
  let fixture: ComponentFixture<UsuarioSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioSidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
