import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListRowComponent } from './todo-list-row.component';

describe('TodoListRowComponent', () => {
  let component: TodoListRowComponent;
  let fixture: ComponentFixture<TodoListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
