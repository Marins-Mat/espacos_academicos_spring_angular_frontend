import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IesParentComponent } from './ies-parent-component';

describe('IesParentComponent', () => {
  let component: IesParentComponent;
  let fixture: ComponentFixture<IesParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IesParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IesParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
