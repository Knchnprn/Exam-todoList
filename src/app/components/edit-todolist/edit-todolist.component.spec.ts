import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodolistComponent } from './edit-todolist.component';

describe('EditTodolistComponent', () => {
  let component: EditTodolistComponent;
  let fixture: ComponentFixture<EditTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
