import {TodoForm} from '../components/todo-form/TodoForm';
import {useCreateTodo} from '../hooks';
import {TodoRequest} from '../api';
import {PageCard} from '../components/ui';
import {useNavigate} from 'react-router-dom';

export const CreateTodoPage = () => {
  const navigate = useNavigate();
  const {mutateAsync} = useCreateTodo();

  const submitHandler = async (values: TodoRequest) => {
    try {
      await mutateAsync(values);
      navigate('/');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <PageCard title="New task" showBackButton>
      <TodoForm onSubmit={submitHandler} />
    </PageCard>
  );
};
