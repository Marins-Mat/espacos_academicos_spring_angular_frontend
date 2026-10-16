import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoEspacoUsuarioParentComponent } from './solicitacao-espaco-usuario-parent-component';

describe('SolicitacaoEspacoUsuarioParentComponent', () => {
  let component: SolicitacaoEspacoUsuarioParentComponent;
  let fixture: ComponentFixture<SolicitacaoEspacoUsuarioParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoEspacoUsuarioParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoEspacoUsuarioParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
