import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColaboradorPageComponent } from './colaborador-page-component';

describe('ColaboradorPageComponent', () => {
  let component: ColaboradorPageComponent;
  let fixture: ComponentFixture<ColaboradorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColaboradorPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
