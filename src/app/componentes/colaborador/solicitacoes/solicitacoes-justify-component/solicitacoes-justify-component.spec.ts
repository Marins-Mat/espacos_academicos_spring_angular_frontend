import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacoesJustifyComponent } from './solicitacoes-justify-component';

describe('SolicitacoesJustifyComponent', () => {
  let component: SolicitacoesJustifyComponent;
  let fixture: ComponentFixture<SolicitacoesJustifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesJustifyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacoesJustifyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
