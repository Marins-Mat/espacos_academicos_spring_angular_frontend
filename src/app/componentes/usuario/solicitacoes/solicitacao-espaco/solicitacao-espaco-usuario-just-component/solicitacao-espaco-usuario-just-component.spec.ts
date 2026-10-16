import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoEspacoUsuarioJustComponent } from './solicitacao-espaco-usuario-just-component';

describe('SolicitacaoEspacoUsuarioJustComponent', () => {
  let component: SolicitacaoEspacoUsuarioJustComponent;
  let fixture: ComponentFixture<SolicitacaoEspacoUsuarioJustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoEspacoUsuarioJustComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoEspacoUsuarioJustComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
