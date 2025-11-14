import {FC} from 'react';
import {LoginForm} from '../components';
import {User} from '../api';
import {useLogin} from '../hooks';

export const LoginPage: FC = () => {
  const {mutateAsync, error} = useLogin();
  const handleSubmit = async (data: User): Promise<void> => {
    try {
      await mutateAsync({
        username: data.username,
        password: data.password,
      });
    } catch {
      console.error('Login failed');
    }
  };

  return <LoginForm onSubmit={handleSubmit} errorMessage={error?.message} />;
};
