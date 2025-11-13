import {TodoForm} from '../components/todo-form/TodoForm';
import {useCreateTodo} from '../hooks';
import {TodoRequest} from '../api';

export const CreateTodoPage = () => {
  const {mutateAsync} = useCreateTodo();

  const submitHandler = async (values: TodoRequest) => {
    await mutateAsync({
      title: values.title,
      description: 'descr',
    });
  };

  return <TodoForm onSubmit={submitHandler} />;
};
