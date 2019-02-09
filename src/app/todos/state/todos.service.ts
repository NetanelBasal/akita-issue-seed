import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { TodosStore } from './todos.store';
import { Todo, createTodo } from './todo.model';
import { timer } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private todosStore: TodosStore) {}

  get() {
    return timer(1000).pipe(
      mapTo([createTodo('Hello')]),
      tap(entities => this.todosStore.set(entities))
    );
  }

  add(todo: Todo) {
    this.todosStore.add(todo);
  }

  update(id, todo: Partial<Todo>) {
    this.todosStore.update(id, todo);
  }

  remove(id: ID) {
    this.todosStore.remove(id);
  }
}
