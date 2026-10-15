import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoEspacoListComponent } from './solicitacao-espaco-list-component';

describe('SolicitacaoEspacoListComponent', () => {
  let component: SolicitacaoEspacoListComponent;
  let fixture: ComponentFixture<SolicitacaoEspacoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoEspacoListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoEspacoListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
