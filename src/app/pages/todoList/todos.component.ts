import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../../app.service';
import { Todo } from '../../shared/interfaces/todo';

@Component({
  selector: 'app-todoList',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {

  /** Subscription for observables to unsubscribe after component destroy. */
  private readonly subscription = new Subscription();

  /** List of todoList. */
  todos: Todo[] = [];

  constructor(private appService: AppService) {
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
    this.subscription.unsubscribe();
  }

  toggleTodo(todo: Todo): void {
    todo.done = !todo.done;
    this.appService.todos.next(this.todos);
  }

  clean(): void {
    this.appService.todos.next(this.todos.filter((todo: Todo): boolean => !todo.done));
  }
}
