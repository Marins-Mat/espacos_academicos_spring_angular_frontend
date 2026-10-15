import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoEspacoJustComponent } from './solicitacao-espaco-just-component';

describe('SolicitacaoEspacoJustComponent', () => {
  let component: SolicitacaoEspacoJustComponent;
  let fixture: ComponentFixture<SolicitacaoEspacoJustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoEspacoJustComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoEspacoJustComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
