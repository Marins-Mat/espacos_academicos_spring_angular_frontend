import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaFormComponent } from './ca-form-component';

describe('CaFormComponent', () => {
  let component: CaFormComponent;
  let fixture: ComponentFixture<CaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
