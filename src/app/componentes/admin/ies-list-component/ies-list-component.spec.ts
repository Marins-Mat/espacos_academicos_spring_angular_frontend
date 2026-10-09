import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IesListComponent } from './ies-list-component';

describe('IesListComponent', () => {
  let component: IesListComponent;
  let fixture: ComponentFixture<IesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IesListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
