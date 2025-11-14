import {useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {ApiError, Tokens, User, UsersService} from '../api';
import {useAuthStore} from '../authStore';
import {useNavigate} from 'react-router-dom';

export const useRegisterUser = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mutation = useMutation<Tokens, ApiError, User>({
    mutationFn: UsersService.registerUser,
  });

  const registerUser = async (user: User) => {
    try {
      setErrorMessage(null);
      const tokens = await mutation.mutateAsync(user);
      login({accessToken: tokens.accessToken, refreshToken: tokens.refreshToken}, user.username);
      navigate('/');
    } catch (error) {
      const message =
        (error as ApiError)?.body?.message ||
        (error as ApiError)?.body?.error ||
        (error as ApiError)?.message ||
        'Registrace se nezdařila. Zkuste to prosím znovu.';

      setErrorMessage(message);
    }
  };

  return {
    registerUser,
    isPending: mutation.isPending,
    errorMessage,
  };
};
