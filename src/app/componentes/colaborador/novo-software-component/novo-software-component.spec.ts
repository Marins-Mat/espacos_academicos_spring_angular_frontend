import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoSoftwareComponent } from './novo-software-component';

describe('NovoSoftwareComponent', () => {
  let component: NovoSoftwareComponent;
  let fixture: ComponentFixture<NovoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoSoftwareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NovoSoftwareComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
