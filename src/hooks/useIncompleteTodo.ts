import {useMutation} from '@tanstack/react-query';
import {TodosService} from '../api';

export const useIncompleteTodo = () => {
  return useMutation({
    mutationFn: TodosService.markTodoIncomplete,
  });
};
