import {useGetTodos} from '../hooks';
import {Button, Icon} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {TodoList} from '../components/todo/TodoList';
import {AllDoneState} from '../components/todo/AllDoneState';
import {PageCard} from '../components/ui';
import {ReactComponent as IconPlus} from '../assets/icons/icon-add.svg';
import {useAuthStore} from '../authStore';
import {getFormattedDate} from '../utils';

export const TodosPage = () => {
  const {username} = useAuthStore();
  const {data, isPending} = useGetTodos();
  const navigate = useNavigate();

  if (isPending) {
    return <div>Loading...</div>;
  }
  return (
    <PageCard
      title={`Hello, ${username}!`}
      headerButton={
        <Button onClick={() => navigate('todo/new')} bg="fill-brand">
          Add task
          <Icon as={IconPlus} boxSize={5} color="text-white" />
        </Button>
      }
      subtitle={getFormattedDate(new Date())}
    >
      {data?.todos ? <TodoList todos={data?.todos} /> : <AllDoneState />}
    </PageCard>
  );
};
