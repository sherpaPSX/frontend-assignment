import {FC} from 'react';
import {LoginForm} from '../components';
import {User} from '../api';
import {useRegisterUser} from '../hooks';

export const RegistrationPage: FC = () => {
  const {registerUser, errorMessage} = useRegisterUser();
  const handleSubmit = async (data: User): Promise<void> => {
    console.log('Registration data:', data);
    await registerUser({
      username: data.username,
      password: data.password,
    });
  };

  return <LoginForm onSubmit={handleSubmit} isRegistration errorMessage={errorMessage} />;
};
