import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = 'assets/';

  todos: ITodo[] = null;

  constructor(private http: HttpClient) {}

  createNewTodo(): void {
    this.todos.push({
      id:
        Math.max.apply(
          Math,
          this.todos.map((task: ITodo) => task.id),
        ) + 1,
      title: 'New Todo',
      notes: '',
      date: null,
      isComplete: false,
      tasks: [],
    });
  }

  getTodos(): Observable<ITodo[]> {
    if (this.todos) {
      return of(this.todos);
    } else {
      return this.http.get<ITodo[]>(this.baseUrl + 'todos.json').pipe(
        map((tasks) => {
          this.todos = tasks;
          return tasks;
        }),
      );
    }
  }

  getTodo(taskId: number): Observable<ITodo> {
    return this.getTodos().pipe(
      map((tasks) => {
        const [taskResult] = tasks.filter((task: ITodo) => task.id === taskId);
        return taskResult;
      }),
    );
  }

  saveTodo(formData: ITodo): void {
    const [taskResult] = this.todos.filter((task: ITodo) => task.id === formData.id);
    if (taskResult) {
      this.todos[this.todos.indexOf(taskResult)] = { ...formData };
    } else {
      formData.id =
        Math.max.apply(
          Math,
          this.todos.map((task: ITodo) => task.id),
        ) + 1;
      this.todos.push(formData);
    }
  }

  deleteTodo(todoId: number): void {
    this.todos = this.todos.filter((todo: ITodo) => todo.id !== todoId);
  }
}
