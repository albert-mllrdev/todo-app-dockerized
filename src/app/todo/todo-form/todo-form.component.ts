import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ITodo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Input() todoId: number;

  todoForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    notes: new FormControl(''),
    date: new FormControl(''),
    isComplete: new FormControl(false),
    tasks: new FormArray([]),
  });

  get tasks(): FormArray {
    return this.todoForm.get('tasks') as FormArray;
  }

  constructor(private todoService: TodoService, private formBuilder: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.loadTodo(this.todoId);
  }

  loadTodo(todoId: number): void {
    if (todoId) {
      this.todoService.getTodo(todoId).subscribe((todo: ITodo) => {
        if (todo) {
          for (let {} of todo.tasks) {
            this.addTask();
          }

          this.todoForm.setValue(todo);
        }
      });
    }
  }

  saveTodo(): void {
    if (this.todoForm.valid) {
      this.todoService.saveTodo(this.todoForm.value);
    }
    this.router.navigate(['/todo']);
  }

  deleteTodo(): void {
    if (confirm('Are you sure you want to delete todo?')) {
      this.todoService.deleteTodo(this.todoId);
      this.router.navigate(['/todo']);
    }
  }

  addTask(): void {
    this.tasks.push(
      this.formBuilder.group({
        title: ['', Validators.required],
        isComplete: new FormControl(false),
      }),
    );
  }

  removeTask(index: number): void {
    this.tasks.removeAt(index);
  }
}
