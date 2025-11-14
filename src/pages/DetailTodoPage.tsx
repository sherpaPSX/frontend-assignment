import {FC} from 'react';
import {useGetTodoById, useIncompleteTodo, useCompleteTodo, useDeleteTodo} from '../hooks';
import {TodoResponse} from '../api';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {PageCard} from '../components/ui';
import {Box, Button, Stack, Text} from '@chakra-ui/react';
import {getFormattedDate} from '../utils';

const CompleteButton: FC<{id: TodoResponse['id']; completed: TodoResponse['completed']}> = ({
  id,
  completed,
}) => {
  const {mutate: mutateComplete, isPending: isCompletePending} = useCompleteTodo();
  const {mutate: mutateIncomplete, isPending: isIncompletePending} = useIncompleteTodo();

  const handleClick = () => {
    if (completed) {
      mutateIncomplete(id);
    } else {
      mutateComplete(id);
    }
  };

  const isPending = isCompletePending || isIncompletePending;

  return (
    <Button
      onClick={handleClick}
      bg="fill-brand"
      disabled={isPending}
      width={{base: 'full', md: 'auto'}}
    >
      {completed ? 'Mark as Incomplete' : 'Mark as Complete'}
    </Button>
  );
};

export const DetailTodoPage: FC = () => {
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();

  if (!id) {
    return <Navigate to="/404" replace />;
  }

  const {data, isPending} = useGetTodoById(id);
  const {mutateAsync: deleteTodo, isPending: isDeleting} = useDeleteTodo();

  if (isPending) {
    return <PageCard.Skeleton />;
  }
  if (!data) {
    return <Navigate to="/404" replace />;
  }

  const handleDelete = async () => {
    try {
      await deleteTodo(id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <PageCard
      title={data.title}
      showBackButton
      headerButton={<CompleteButton id={data.id} completed={data.completed} />}
      subtitle={getFormattedDate(new Date(data.createdAt))}
    >
      <Box borderTop="xs" borderColor="border.muted" pt="4">
        <Text color="text-secondary">{data.description}</Text>
      </Box>
      <Stack justify="space-between" direction={{base: 'column-reverse', md: 'row'}} mt="8">
        <Button colorPalette="red" variant="surface" onClick={handleDelete} disabled={isDeleting}>
          Delete
        </Button>
        <Button
          colorPalette="gray"
          variant="surface"
          onClick={() => navigate('edit')}
          disabled={isDeleting}
        >
          Update
        </Button>
      </Stack>
    </PageCard>
  );
};
