import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoSoftwareUsuarioJustComponent } from './solicitacao-software-usuario-just-component';

describe('SolicitacaoSoftwareUsuarioJustComponent', () => {
  let component: SolicitacaoSoftwareUsuarioJustComponent;
  let fixture: ComponentFixture<SolicitacaoSoftwareUsuarioJustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoSoftwareUsuarioJustComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoSoftwareUsuarioJustComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
