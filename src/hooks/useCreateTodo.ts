import {useMutation} from '@tanstack/react-query';
import {TodosService} from '../api';
import {useNavigate} from 'react-router-dom';

export const useCreateTodo = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: TodosService.createTodo,
    onSuccess: () => {
      navigate('/');
    },
  });
};
