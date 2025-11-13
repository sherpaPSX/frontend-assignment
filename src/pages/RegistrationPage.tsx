import {FC} from 'react';
import {LoginForm} from '../components';
import {User} from '../api';
import {useRegisterUser} from '../hooks';

export const RegistrationPage: FC = () => {
  const {mutateAsync, error} = useRegisterUser();
  const handleSubmit = async (data: User): Promise<void> => {
    console.log('Registration data:', data);
    await mutateAsync({
      username: data.username,
      password: data.password,
    });
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} isRegistration />
      {error && <div style={{color: 'red'}}>{error.message}</div>}
    </>
  );
};
