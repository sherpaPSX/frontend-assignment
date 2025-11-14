import {useMutation} from '@tanstack/react-query';
import {UsersService} from '../api';
import {useAuthStore} from '../authStore';
import {useNavigate} from 'react-router-dom';

export const useLogin = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: UsersService.loginUser,
    onSuccess: async (tokens, user) => {
      login({accessToken: tokens.accessToken, refreshToken: tokens.refreshToken}, user.username);
      navigate('/');
    },
  });
};
