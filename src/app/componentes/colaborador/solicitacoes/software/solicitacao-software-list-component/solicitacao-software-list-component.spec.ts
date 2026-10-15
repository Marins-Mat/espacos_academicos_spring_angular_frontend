import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoSoftwareListComponent } from './solicitacao-software-list-component';

describe('SolicitacaoSoftwareListComponent', () => {
  let component: SolicitacaoSoftwareListComponent;
  let fixture: ComponentFixture<SolicitacaoSoftwareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoSoftwareListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoSoftwareListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
