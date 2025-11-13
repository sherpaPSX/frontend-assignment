import {FC} from 'react';
import {LoginForm} from '../components';
import {User} from '../api';
import {useLogin} from '../hooks';

export const LoginPage: FC = () => {
  const {mutateAsync} = useLogin();
  const handleSubmit = async (data: User): Promise<void> => {
    await mutateAsync({
      username: data.username,
      password: data.password,
    });
  };

  return <LoginForm onSubmit={handleSubmit} />;
};
