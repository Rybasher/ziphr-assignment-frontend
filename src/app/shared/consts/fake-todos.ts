import { TodoPriority } from '../enums/todo-priority';
import { Todo } from '../interfaces/todo';

/** List of fake todoList for testing. */
export const FakeTodos: Todo[] = [
  {
    title: 'Setup Foo module for testing',
    date: Date.now(),
    priority: TodoPriority.LOW,
    done: false,
  },
  {
    title: 'Do something random here',
    date: Date.now(),
    priority: TodoPriority.NORMAL,
    done: false,
  },
  {
    title: 'Remove Bar module from app module',
    date: Date.now(),
    priority: TodoPriority.NORMAL,
    done: true,
  },
  {
    title: 'Write unit-tests for XYZ app',
    date: Date.now(),
    priority: TodoPriority.HIGH,
    done: false,
  },
  {
    title: 'Delete ABC module completely',
    date: Date.now(),
    priority: TodoPriority.NORMAL,
    done: false,
  },
];
