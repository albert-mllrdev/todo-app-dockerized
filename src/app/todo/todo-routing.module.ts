import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoViewComponent } from './todo-view/todo-view.component';

import { TodoComponent } from './todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'view/:todoId', component: TodoViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
