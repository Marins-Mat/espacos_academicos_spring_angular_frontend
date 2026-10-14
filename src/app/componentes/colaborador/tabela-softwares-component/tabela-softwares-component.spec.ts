import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaSoftwaresComponent } from './tabela-softwares-component';

describe('TabelaSoftwaresComponent', () => {
  let component: TabelaSoftwaresComponent;
  let fixture: ComponentFixture<TabelaSoftwaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaSoftwaresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabelaSoftwaresComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
