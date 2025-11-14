import {TodoForm} from '../components/todo-form/TodoForm';
import {FC} from 'react';
import {useGetTodoById, useUpdateTodo} from '../hooks';
import {TodoRequest} from '../api';
import {Navigate, useParams} from 'react-router-dom';
import {PageCard} from '../components/ui';

export const EditTodoPage: FC = () => {
  const {id} = useParams<{id: string}>();
  const {data, isPending} = useGetTodoById(id!);
  const {mutateAsync} = useUpdateTodo(id!);

  const handleSubmit = async (data: TodoRequest) => {
    await mutateAsync({...data});
  };

  if (isPending) {
    return <PageCard.Skeleton />;
  }

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageCard title={data.title} showBackButton>
      <TodoForm onSubmit={handleSubmit} data={data} isEdit />
    </PageCard>
  );
};
