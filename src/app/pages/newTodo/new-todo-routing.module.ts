import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from './new-todo.component';

const routes: Routes = [
  {
    path: '',
    component: NewTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTodosRoutingModule {
}
