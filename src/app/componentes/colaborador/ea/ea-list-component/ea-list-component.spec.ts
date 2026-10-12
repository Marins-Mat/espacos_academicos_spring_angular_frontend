import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EaListComponent } from './ea-list-component';

describe('EaListComponent', () => {
  let component: EaListComponent;
  let fixture: ComponentFixture<EaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EaListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EaListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
