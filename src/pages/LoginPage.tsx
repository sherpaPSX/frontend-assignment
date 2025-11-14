import {FC} from 'react';
import {LoginForm} from '../components';
import {User} from '../api';
import {useLogin} from '../hooks';

export const LoginPage: FC = () => {
  const {loginUser, errorMessage} = useLogin();
  const handleSubmit = async (data: User): Promise<void> => {
    await loginUser({
      username: data.username,
      password: data.password,
    });
  };

  console.log(errorMessage);

  return <LoginForm onSubmit={handleSubmit} errorMessage={errorMessage} />;
};
