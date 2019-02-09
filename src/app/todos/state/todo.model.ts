import { ID, guid } from '@datorama/akita';

export interface Todo {
  id: ID;
  title: string;
}

/**
 * A factory function that creates Todos
 */
export function createTodo(title: string) {
  return {
    id: guid(),
    title
  } as Todo;
}
