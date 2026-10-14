import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EaFormComponent } from './ea-form-component';

describe('EaFormComponent', () => {
  let component: EaFormComponent;
  let fixture: ComponentFixture<EaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EaFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EaFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
