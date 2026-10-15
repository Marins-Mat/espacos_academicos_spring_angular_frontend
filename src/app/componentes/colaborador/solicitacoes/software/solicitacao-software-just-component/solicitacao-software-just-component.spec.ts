import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoSoftwareJustComponent } from './solicitacao-software-just-component';

describe('SolicitacaoSoftwareJustComponent', () => {
  let component: SolicitacaoSoftwareJustComponent;
  let fixture: ComponentFixture<SolicitacaoSoftwareJustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoSoftwareJustComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoSoftwareJustComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
