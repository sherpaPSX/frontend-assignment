import {useForm} from 'react-hook-form';
import {TodoRequest} from '../../api';
import {FC} from 'react';
import {Button} from '@chakra-ui/react';
import {InputField} from '../ui';

interface Props {
  onSubmit: (data: TodoRequest) => Promise<void>;
}

export const TodoForm: FC<Props> = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {isSubmitting, errors},
  } = useForm<TodoRequest>();

  const submitHandler = async (values: TodoRequest) => {
    console.log('Submitting new todo:', values);
    await onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} noValidate>
      <InputField
        required
        label="Task name"
        {...register('title', {required: 'Titke is required'})}
        invalid={!!errors.title}
        errorMessage={errors.title?.message}
      />
      <Button type="submit" disabled={isSubmitting}>
        Save
      </Button>
    </form>
  );
};
