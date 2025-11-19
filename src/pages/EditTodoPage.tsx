import {TodoForm} from '../components/todo-form/TodoForm';
import {FC} from 'react';
import {useGetTodoById, useUpdateTodo} from '../hooks';
import {TodoRequest} from '../api';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {PageCard} from '../components/ui';

export const EditTodoPage: FC = () => {
  const {id} = useParams<{id: string}>();
  const navigate = useNavigate();
  const {data, isPending} = useGetTodoById(id!);
  const {mutateAsync} = useUpdateTodo(id!);

  if (!id) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (data: TodoRequest) => {
    try {
      await mutateAsync(data);
      navigate('/');
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  if (isPending) {
    return <PageCard.Skeleton />;
  }

  if (!data) {
    console.error('Todo not found');
    return <Navigate to="/" replace />;
  }

  return (
    <PageCard title={data.title} showBackButton>
      <TodoForm onSubmit={handleSubmit} data={data} />
    </PageCard>
  );
};
