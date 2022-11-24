import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FakeTodos } from './shared/consts/fake-todos';
import { Todo } from './shared/interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  /** Key for todoList in localStorage. */
  private readonly todosKey = 'todos';

  /**
   * Behaviour subject to watch, load, and save changes.
   * Loading and saving is handled by this service.
   * Components can watch and make changes to the list.
   */
  readonly todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  constructor() {
    console.debug('AppService initiated.');
    /** Load initial value. */
    console.debug('Loading todoList from localStorage.');
    let storedTodos: string | null = localStorage.getItem(this.todosKey);
    /** Checking if we should save fake data. */
    if (!storedTodos) {
      console.debug('Loading fake todoList since localStorage is empty.');
      storedTodos = JSON.stringify(FakeTodos);
    }
    /** Emit initial value to the subject. */
    this.todos.next(JSON.parse(storedTodos));
    /** Watch to save new changes to localStorage. */
    this.todos.subscribe({
      next: (value: Todo[]): void => {
        console.debug('Saving todoList to localStorage.');
        localStorage.setItem(this.todosKey, JSON.stringify(value));
      },
    });
  }
}
