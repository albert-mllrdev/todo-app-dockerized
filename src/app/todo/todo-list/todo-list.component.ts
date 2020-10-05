import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: ITodo[];

  constructor() {}

  ngOnInit(): void {}
}
