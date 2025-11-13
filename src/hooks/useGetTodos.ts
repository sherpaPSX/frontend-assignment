import {useQuery} from '@tanstack/react-query';
import {TodoResponse, TodosService} from '../api';

interface Response {
  todos: Array<TodoResponse>;
}

export const useGetTodos = () => {
  return useQuery({
    queryFn: async () => {
      return (await TodosService.getTodoList()) as unknown as Response;
    },
    queryKey: ['getTodos'],
  });
};
