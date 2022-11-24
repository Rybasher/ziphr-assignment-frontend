import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTodoComponent } from './new-todo.component';
import { NewTodosRoutingModule } from './new-todo-routing.module';
@NgModule({
  declarations: [
    NewTodoComponent,
  ],
  imports: [
    CommonModule,
    NewTodosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class NewTodoModule {
}
