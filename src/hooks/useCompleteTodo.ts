import {useMutation} from '@tanstack/react-query';
import {TodosService} from '../api';

export const useCompleteTodo = () => {
  return useMutation({
    mutationFn: TodosService.markTodoComplete,
  });
};
