import {TodoForm} from '../components/todo-form/TodoForm';
import {FC} from 'react';
import {useGetTodoById, useUpdateTodo} from '../hooks';
import {TodoRequest} from '../api';
import {useParams} from 'react-router-dom';

export const EditTodoPage: FC = () => {
  const {id} = useParams<{id: string}>();
  const {data, isPending} = useGetTodoById(id!);
  const {mutateAsync} = useUpdateTodo(id!);

  const handleSubmit = async (data: TodoRequest) => {
    await mutateAsync({...data});
  };

  if (isPending) {
    return <div>Loading...</div>;
  }
  return <TodoForm onSubmit={handleSubmit} data={data} />;
};
