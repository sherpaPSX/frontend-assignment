import {useMutation, useQueryClient} from '@tanstack/react-query';
import {TodosService} from '../api';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TodosService.deleteTodoById,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['getTodos']});
    },
  });
};
