import {useGetTodos} from '../hooks';
import {Alert, Button, Icon} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {TodoList} from '../components/todo/TodoList';
import {AllDoneState} from '../components/todo/AllDoneState';
import {PageCard} from '../components/ui';
import {ReactComponent as IconPlus} from '../assets/icons/icon-add.svg';
import {useAuthStore} from '../authStore';
import {getFormattedDate} from '../utils';

export const TodosPage = () => {
  const {username} = useAuthStore();
  const {data, isPending, error, refetch} = useGetTodos();
  const navigate = useNavigate();

  if (isPending) {
    return <PageCard.Skeleton />;
  }
  return (
    <PageCard
      title={`Hello, ${username}!`}
      headerButton={
        <Button
          onClick={() => navigate('/todo/new')}
          bg="fill-brand"
          width={{base: 'full', md: 'auto'}}
        >
          Add task
          <Icon as={IconPlus} color="text-white" />
        </Button>
      }
      subtitle={getFormattedDate(new Date())}
    >
      {data?.todos ? <TodoList todos={data?.todos} /> : <AllDoneState />}
      {error && (
        <Alert.Root status="error" title={error?.message} px="4" py="2" alignItems="center">
          <Alert.Indicator />
          <Alert.Title>
            Failed to load todos
            <Button variant="plain" onClick={() => refetch()} ml={2}>
              Retry
            </Button>
          </Alert.Title>
        </Alert.Root>
      )}
    </PageCard>
  );
};
