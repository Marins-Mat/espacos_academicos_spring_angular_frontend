import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoEspacoParentComponent } from './solicitacao-espaco-parent-component';

describe('SolicitacaoEspacoParentComponent', () => {
  let component: SolicitacaoEspacoParentComponent;
  let fixture: ComponentFixture<SolicitacaoEspacoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoEspacoParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoEspacoParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
