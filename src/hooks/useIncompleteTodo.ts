import {useMutation, useQueryClient} from '@tanstack/react-query';
import {TodoResponse, TodosService} from '../api';

export const useIncompleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TodosService.markTodoIncomplete,
    onMutate: async (todoId: string) => {
      await queryClient.cancelQueries({queryKey: ['todo', todoId]});

      const previousData = queryClient.getQueryData<TodoResponse>(['todo', todoId]);
      queryClient.setQueryData<TodoResponse>(['todo', todoId], (old) =>
        old ? {...old, completed: false} : old
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
