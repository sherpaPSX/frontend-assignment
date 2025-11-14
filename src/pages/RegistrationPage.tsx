import {FC} from 'react';
import {LoginForm} from '../components';
import {User} from '../api';
import {useRegisterUser} from '../hooks';

export const RegistrationPage: FC = () => {
  const {mutateAsync} = useRegisterUser();
  const handleSubmit = async (data: User): Promise<void> => {
    try {
      await mutateAsync({
        username: data.username,
        password: data.password,
      });
    } catch {
      console.error('Registration failed');
    }
  };

  return <LoginForm onSubmit={handleSubmit} isRegistration />;
};
