import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoSoftwareUsuarioFormComponent } from './solicitacao-software-usuario-form-component';

describe('SolicitacaoSoftwareUsuarioFormComponent', () => {
  let component: SolicitacaoSoftwareUsuarioFormComponent;
  let fixture: ComponentFixture<SolicitacaoSoftwareUsuarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoSoftwareUsuarioFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoSoftwareUsuarioFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
