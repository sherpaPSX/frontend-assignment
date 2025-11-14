import {useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {ApiError, Tokens, User, UsersService} from '../api';
import {useAuthStore} from '../authStore';
import {useNavigate} from 'react-router-dom';

export const useLogin = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mutation = useMutation<Tokens, ApiError, User>({
    mutationFn: UsersService.loginUser,
  });

  const loginUser = async (user: User) => {
    try {
      setErrorMessage(null); // reset chyby
      const tokens = await mutation.mutateAsync(user);

      login({accessToken: tokens.accessToken, refreshToken: tokens.refreshToken}, user.username);

      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);

      const message =
        (error as ApiError)?.body?.message ||
        (error as ApiError)?.body?.error ||
        (error as ApiError)?.message ||
        'Přihlášení se nezdařilo. Zkontrolujte přihlašovací údaje.';

      setErrorMessage(message);
    }
  };

  return {
    loginUser, // funkce kterou zavoláš v komponentě
    isPending: mutation.isPending,
    errorMessage,
  };
};
