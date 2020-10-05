import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListRowComponent } from './todo-list/todo-list-row/todo-list-row.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoListRowComponent, TodoViewComponent, TodoFormComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    FilterPipeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class TodoModule {}
