import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaParentComponent } from './ca-parent-component';

describe('CaParentComponent', () => {
  let component: CaParentComponent;
  let fixture: ComponentFixture<CaParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
