import { Component, OnInit } from '@angular/core';
import { TodosService } from '../state/todos.service';
import { TodosQuery } from '../state/todos.query';
import { Todo } from '../state/todo.model';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private todosQuery: TodosQuery,
    private todosService: TodosService
  ) {}

  ngOnInit() {
    this.todos$ = this.todosQuery.selectAll();
    this.isLoading$ = this.todosQuery.selectLoading();

    this.todosService.get().subscribe();
  }

  add(todo: Todo) {
    this.todosService.add(todo);
  }

  update(id: ID, todo: Partial<Todo>) {
    this.todosService.update(id, todo);
  }

  remove(id: ID) {
    this.todosService.remove(id);
  }
}
