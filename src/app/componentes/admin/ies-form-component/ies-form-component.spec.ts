import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IesFormComponent } from './ies-form-component';

describe('IesFormComponent', () => {
  let component: IesFormComponent;
  let fixture: ComponentFixture<IesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IesFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IesFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
