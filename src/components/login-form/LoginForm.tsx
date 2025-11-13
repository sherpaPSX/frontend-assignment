import {FC} from 'react';
import {InputField, PasswordField} from '../ui';
import {Button, Fieldset} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {User} from '../../api';

interface Props {
  onSubmit: (data: User) => Promise<void>;
  isRegistration?: boolean;
}

export const LoginForm: FC<Props> = ({onSubmit, isRegistration}) => {
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

        <Button type="submit" variant="outline" width="full" disabled={isSubmitting}>
          {isRegistration ? 'Register' : 'Login'}
        </Button>
      </Fieldset.Root>
    </form>
  );
};
