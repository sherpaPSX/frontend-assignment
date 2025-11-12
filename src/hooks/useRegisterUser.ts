// src/hooks/useRegisterUser.ts
import {useMutation} from '@tanstack/react-query';
import {Tokens, User, UsersService} from '../api';

export const useRegisterUser = () => {
  const register = async (userData: User): Promise<Tokens> => {
    return UsersService.registerUser(userData);
  };

  const response = useMutation<Tokens, unknown, User>({
    mutationFn: register,
  });

  if (response.isSuccess) {
    const tokens = response.data;
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
  }

  return response;
};
