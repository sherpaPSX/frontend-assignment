import {TodoForm} from '../components/todo-form/TodoForm';
import {useCreateTodo} from '../hooks';
import {TodoRequest} from '../api';
import {PageCard} from '../components/ui';

export const CreateTodoPage = () => {
  const {mutateAsync} = useCreateTodo();

  const submitHandler = async (values: TodoRequest) => {
    await mutateAsync({
      title: values.title,
      description: 'descr',
    });
  };

  return (
    <PageCard title="New task" navigateBackPath="..">
      <TodoForm onSubmit={submitHandler} />
    </PageCard>
  );
};
