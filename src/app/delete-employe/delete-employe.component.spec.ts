import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeComponent } from './delete-employe.component';

describe('DeleteEmployeComponent', () => {
  let component: DeleteEmployeComponent;
  let fixture: ComponentFixture<DeleteEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
