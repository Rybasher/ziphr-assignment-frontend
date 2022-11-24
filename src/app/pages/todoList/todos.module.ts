import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    TodosComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
  ],
})
export class TodosModule {
}
