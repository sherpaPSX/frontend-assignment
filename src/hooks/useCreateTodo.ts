import {useMutation, useQueryClient} from '@tanstack/react-query';
import {TodosService, TodoResponse} from '../api';
import {useNavigate} from 'react-router-dom';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: TodosService.createTodo,
    onSuccess: (newTodo: TodoResponse) => {
      queryClient.setQueryData<TodoResponse[]>(['getTodos'], (oldTodos = []) => [
        ...oldTodos,
        newTodo,
      ]);
      navigate('/');
    },
  });
};
