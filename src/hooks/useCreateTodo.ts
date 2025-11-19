import {useMutation} from '@tanstack/react-query';
import {TodosService} from '../api';

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: TodosService.createTodo,
  });
};
