import {useMutation} from '@tanstack/react-query';
import {ApiError, Tokens, User, UsersService} from '../api';
import {useAuthStore} from '../authStore';
import {useNavigate} from 'react-router-dom';

export const useRegisterUser = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  return useMutation<Tokens, ApiError, User>({
    mutationFn: UsersService.registerUser,
    onSuccess: (tokens, variables) => {
      login(
        {accessToken: tokens.accessToken, refreshToken: tokens.refreshToken},
        variables?.username ?? ''
      );
      navigate('/');
    },
  });
};
