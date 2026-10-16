import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoSoftwareUsuarioParentComponent } from './solicitacao-software-usuario-parent-component';

describe('SolicitacaoSoftwareUsuarioParentComponent', () => {
  let component: SolicitacaoSoftwareUsuarioParentComponent;
  let fixture: ComponentFixture<SolicitacaoSoftwareUsuarioParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoSoftwareUsuarioParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoSoftwareUsuarioParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
