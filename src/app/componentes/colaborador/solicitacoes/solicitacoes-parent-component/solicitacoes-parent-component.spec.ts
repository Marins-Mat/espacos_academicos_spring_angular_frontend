import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacoesParentComponent } from './solicitacoes-parent-component';

describe('SolicitacoesParentComponent', () => {
  let component: SolicitacoesParentComponent;
  let fixture: ComponentFixture<SolicitacoesParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacoesParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
