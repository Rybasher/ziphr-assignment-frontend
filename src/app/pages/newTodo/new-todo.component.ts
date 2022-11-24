import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Todo } from '../../shared/interfaces/todo';
import { TodoPriority } from '../../shared/enums/todo-priority';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit, OnDestroy {
  title: FormControl<string> = new FormControl('title', {nonNullable: true});
  selectedValue: string = 'LOW';
  priorities: string[] = ['LOW', 'NORMAL', 'HIGH'];
  todoAdded: boolean = false;
  private readonly subscription = new Subscription();

  /** List of todoList. */
  todos: Todo[] = [];

  constructor(
    private appService: AppService,
  ) {
    console.debug('TodosComponent initiated.');
  }

  ngOnInit(): void {
    this.subscription.add(this.appService.todos.subscribe({
      next: (value: Todo[]): void => {
        this.todos = value;
      },
    }));
  }

  ngOnDestroy(): void {
    console.log('leave the page')
  }

  addNewTodo() {
    const todo: Todo = {
      title: this.title.value,
      done: false,
      date: Number(('0' + new Date().getDay()).slice(-2)),
      priority: TodoPriority[this.selectedValue as keyof typeof  TodoPriority],
    }
    this.todos.push(todo);
    this.appService.todos.next(this.todos);
    this.todoAdded = true;
    setTimeout(() => {
      this.todoAdded = false;
    }, 1500)
  }
}
