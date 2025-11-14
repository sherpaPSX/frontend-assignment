import {useQuery} from '@tanstack/react-query';
import {TodoResponse, TodosService} from '../api';

interface Response {
  todos: Array<TodoResponse>;
}

export const useGetTodos = () => useQuery({
    queryFn: async () => (await TodosService.getTodoList()) as unknown as Response,
    queryKey: ['getTodos'],
  });
