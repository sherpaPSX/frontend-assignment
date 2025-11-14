import {FC} from 'react';
import {InputField, PasswordField} from '../ui';
import {Alert, Button, Fieldset} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {User} from '../../api';

interface Props {
  onSubmit: (data: User) => Promise<void>;
  isRegistration?: boolean;
  errorMessage?: string;
}

export const LoginForm: FC<Props> = ({onSubmit, isRegistration, errorMessage}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<User>();

  const handleFormSubmit = async (data: User) => {
    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
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

        {errorMessage && (
          <Alert.Root status="error" title={errorMessage} mb={4} p={4}>
            <Alert.Indicator />
            <Alert.Title>{errorMessage}</Alert.Title>
          </Alert.Root>
        )}
        <Button type="submit" variant="outline" width="full" disabled={isSubmitting}>
          {isRegistration ? 'Register' : 'Login'}
        </Button>
      </Fieldset.Root>
    </form>
  );
};
