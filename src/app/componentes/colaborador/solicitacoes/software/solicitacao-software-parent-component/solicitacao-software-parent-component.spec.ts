import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoSoftwareParentComponent } from './solicitacao-software-parent-component';

describe('SolicitacaoSoftwareParentComponent', () => {
  let component: SolicitacaoSoftwareParentComponent;
  let fixture: ComponentFixture<SolicitacaoSoftwareParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoSoftwareParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoSoftwareParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
