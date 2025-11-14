import {useForm} from 'react-hook-form';
import {TodoRequest} from '../../api';
import {FC} from 'react';
import {Button, Flex, Icon} from '@chakra-ui/react';
import {InputField, TextareaField} from '../ui';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as IconCheck} from '../../assets/icons/icon-check.svg';

interface Props {
  onSubmit: (data: TodoRequest) => Promise<void>;
  data?: TodoRequest;
  isEdit?: boolean;
}

export const TodoForm: FC<Props> = ({onSubmit, data, isEdit}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {isSubmitting, errors},
  } = useForm<TodoRequest>({
    defaultValues: data,
  });

  const submitHandler = async (values: TodoRequest) => {
    await onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} noValidate>
      <InputField
        {...register('title', {required: 'Title is required'})}
        required
        label="Task name"
        invalid={!!errors.title}
        errorMessage={errors.title?.message}
      />
      <TextareaField
        {...register('description', {required: 'Description is required'})}
        required
        label="Description"
        invalid={!!errors.description}
        errorMessage={errors.description?.message}
        minH="120px"
      />
      <Flex justify="space-between">
        <Button variant="subtle" onClick={() => navigate('..')} disabled={isSubmitting}>
          Discard
        </Button>
        <Button type="submit" bg="fill-brand" disabled={isSubmitting}>
          {isEdit ? 'Update' : 'Create'}
          <Icon as={IconCheck} color="text-white" />
        </Button>
      </Flex>
    </form>
  );
};
