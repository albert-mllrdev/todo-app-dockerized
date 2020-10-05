import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITodo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-todo-list-row',
  templateUrl: './todo-list-row.component.html',
  styleUrls: ['./todo-list-row.component.scss'],
})
export class TodoListRowComponent implements OnInit {
  @Input() todo: ITodo;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  completeTodo(event): void {
    this.todo.isComplete = !this.todo.isComplete;
    event.stopPropagation();
  }

  viewTodo(): void {
    const viewURL = '/todo/view/';
    this.router.navigate([`${viewURL}${this.todo.id}`]);
  }
}
