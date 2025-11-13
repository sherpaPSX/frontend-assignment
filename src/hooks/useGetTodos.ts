import {useQuery} from '@tanstack/react-query';
import {TodosService} from '../api';

export const useGetTodos = () => {
  return useQuery({
    queryFn: TodosService.getTodoList,
    queryKey: ['getTodos'],
  });
};
