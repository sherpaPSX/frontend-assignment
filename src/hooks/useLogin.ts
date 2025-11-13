import {useMutation} from '@tanstack/react-query';
import {ApiError, Tokens, User, UsersService} from '../api';
import {useAuthStore} from '../authStore';
import {useNavigate} from 'react-router-dom';

export const useLogin = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const register = async (userData: User): Promise<Tokens> => {
    return UsersService.loginUser(userData);
  };

  return useMutation<Tokens, ApiError, User>({
    mutationFn: register,
    onSuccess: (tokens, variables) => {
      login(
        {accessToken: tokens.accessToken, refreshToken: tokens.refreshToken},
        variables?.username ?? ''
      );
      navigate('/');
    },
  });
};
