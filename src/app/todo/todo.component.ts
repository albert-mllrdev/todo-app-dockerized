import { Component, OnInit } from '@angular/core';
import { ITodo } from '../core/interfaces';
import { TodoService } from '../core/services';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe((todos: ITodo[]) => {
      this.todos = todos;
    });
  }

  addTodo(): void {
    this.todoService.createNewTodo();
    this.loadTodos();
  }
}
