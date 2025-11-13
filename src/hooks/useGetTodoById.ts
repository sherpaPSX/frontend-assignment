import {useQuery} from '@tanstack/react-query';
import {TodosService} from '../api';

export const useGetTodoById = (todoId: string) => {
  return useQuery({
    queryFn: () => TodosService.getTodoById(todoId),
    queryKey: ['todo', todoId],
    enabled: !!todoId,
  });
};
