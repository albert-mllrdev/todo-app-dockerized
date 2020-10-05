import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent implements OnInit {
  todoId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setTodoId();
  }

  setTodoId(): void {
    this.todoId = +this.route.snapshot.paramMap.get('todoId');
  }
}
