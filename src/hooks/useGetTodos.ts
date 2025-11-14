import {useQuery} from '@tanstack/react-query';
import {TodoResponse, TodosService} from '../api';

/**
 * Backend defines that the response is array of todos, but it is wrapped in an object with a "todos" key.
 */

interface Response {
  todos: Array<TodoResponse>;
}

export const useGetTodos = () =>
  useQuery({
    queryFn: async () => (await TodosService.getTodoList()) as unknown as Response,
    queryKey: ['getTodos'],
  });
