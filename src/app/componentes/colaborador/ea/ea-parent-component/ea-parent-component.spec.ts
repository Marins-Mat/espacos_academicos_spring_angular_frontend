import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EaParentComponent } from './ea-parent-component';

describe('EaParentComponent', () => {
  let component: EaParentComponent;
  let fixture: ComponentFixture<EaParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EaParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EaParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
