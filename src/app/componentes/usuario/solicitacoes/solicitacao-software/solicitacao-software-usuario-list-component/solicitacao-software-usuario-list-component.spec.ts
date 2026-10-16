import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoSoftwareUsuarioListComponent } from './solicitacao-software-usuario-list-component';

describe('SolicitacaoSoftwareUsuarioListComponent', () => {
  let component: SolicitacaoSoftwareUsuarioListComponent;
  let fixture: ComponentFixture<SolicitacaoSoftwareUsuarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoSoftwareUsuarioListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoSoftwareUsuarioListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
