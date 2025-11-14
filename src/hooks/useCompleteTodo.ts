import {useMutation, useQueryClient} from '@tanstack/react-query';
import {TodosService, TodoResponse} from '../api';

export const useCompleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TodosService.markTodoComplete,
    onMutate: async (todoId: string) => {
      await queryClient.cancelQueries({queryKey: ['todo', todoId]});
      const previousData = queryClient.getQueryData<TodoResponse>(['todo', todoId]);
      queryClient.setQueryData<TodoResponse>(['todo', todoId], (old) =>
        old ? {...old, completed: true} : old
      );

      return {previousData};
    },
    onError: (_err, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(['todo', context.previousData.id], context.previousData);
      }
    },
    onSettled: (_data, _error, todoId: string) => {
      queryClient.invalidateQueries({queryKey: ['todo', todoId]});
      queryClient.invalidateQueries({queryKey: ['getTodos']});
    },
  });
};
