import {FC} from 'react';
import {InputField, PasswordField} from '../ui';
import {Alert, Button, Fieldset} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {User} from '../../api';
import {useRegisterUser} from '../../hooks';

type RegistrationData = User & {
  repeatPassword: string;
};

export const RegistrationForm: FC = () => {
  const {mutateAsync, error} = useRegisterUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isSubmitting},
  } = useForm<RegistrationData>();

  const passwordValue = watch('password');

  const onSubmit = async (data: RegistrationData): Promise<void> => {
    try {
      await mutateAsync({
        username: data.username,
        password: data.password,
      });
    } catch {
      console.error('Registration failed');
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

        <PasswordField
          {...register('repeatPassword', {
            required: 'Repeat your password',
            validate: (value) => value === passwordValue || 'Passwords do not match',
          })}
          label="Repeat Password"
          placeholder="Repeat your password"
          required
          invalid={!!errors.repeatPassword}
          errorMessage={errors.repeatPassword?.message}
        />

        {error && (
          <Alert.Root status="error" title={error.message} mb={4} p={4}>
            <Alert.Indicator />
            <Alert.Title>{error.message}</Alert.Title>
          </Alert.Root>
        )}

        <Button type="submit" bg="fill-brand" width="full" disabled={isSubmitting}>
          Register
        </Button>
      </Fieldset.Root>
    </form>
  );
};
