import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoEspacoUsuarioListComponent } from './solicitacao-espaco-usuario-list-component';

describe('SolicitacaoEspacoUsuarioListComponent', () => {
  let component: SolicitacaoEspacoUsuarioListComponent;
  let fixture: ComponentFixture<SolicitacaoEspacoUsuarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoEspacoUsuarioListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoEspacoUsuarioListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
