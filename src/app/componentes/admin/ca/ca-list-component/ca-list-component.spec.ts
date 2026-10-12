import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaListComponent } from './ca-list-component';

describe('CaListComponent', () => {
  let component: CaListComponent;
  let fixture: ComponentFixture<CaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
