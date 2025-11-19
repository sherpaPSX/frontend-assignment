import {useMutation, useQueryClient} from '@tanstack/react-query';
import {TodosService, TodoRequest, TodoResponse} from '../api';

export const useUpdateTodo = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<TodoResponse, unknown, TodoRequest>({
    mutationFn: (data) => TodosService.updateTodoById(id, data),
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData<{todos: TodoResponse[]}>(['getTodos'], (oldData) => {
        if (!oldData) return {todos: [updatedTodo]};

        return {
          todos: oldData.todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
        };
      });
    },
  });
};
