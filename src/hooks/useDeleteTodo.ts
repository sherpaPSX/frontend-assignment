import {useMutation} from '@tanstack/react-query';
import {TodosService} from '../api';

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: TodosService.deleteTodoById,
  });
};
