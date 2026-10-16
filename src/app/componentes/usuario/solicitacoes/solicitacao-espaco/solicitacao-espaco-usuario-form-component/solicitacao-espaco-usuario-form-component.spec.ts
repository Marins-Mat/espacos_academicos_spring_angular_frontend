import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoEspacoUsuarioFormComponent } from './solicitacao-espaco-usuario-form-component';

describe('SolicitacaoEspacoUsuarioFormComponent', () => {
  let component: SolicitacaoEspacoUsuarioFormComponent;
  let fixture: ComponentFixture<SolicitacaoEspacoUsuarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoEspacoUsuarioFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoEspacoUsuarioFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
