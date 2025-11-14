import {FC} from 'react';
import {InputField, PasswordField} from '../ui';
import {Alert, Button, Fieldset} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {User} from '../../api';
import {useLogin} from '../../hooks';

export const LoginForm: FC = () => {
  const {mutateAsync, error} = useLogin();
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<User>();

  const onSubmit = async (data: User): Promise<void> => {
    try {
      await mutateAsync({
        username: data.username,
        password: data.password,
      });
    } catch {
      console.error('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Fieldset.Root>
        <InputField
          {...register('username', {required: 'Username is required'})}
          label="Username"
          placeholder="Enter your username"
          required
          invalid={!!errors.username}
          errorMessage={errors.username?.message}
        />

        <PasswordField
          {...register('password', {required: 'Password is required'})}
          label="Password"
          placeholder="Enter your password"
          required
          invalid={!!errors.password}
          errorMessage={errors.password?.message}
        />

        {error && (
          <Alert.Root status="error" title={error.message} mb={4} p={4}>
            <Alert.Indicator />
            <Alert.Title>{error.message}</Alert.Title>
          </Alert.Root>
        )}
        <Button type="submit" colorPalette="blue" width="full" disabled={isSubmitting}>
          Login
        </Button>
      </Fieldset.Root>
    </form>
  );
};
