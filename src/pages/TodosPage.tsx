import {useGetTodos} from '../hooks';
import {Button} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {TodoList} from '../components/todo/TodoList';
import {AllDoneState} from '../components/todo/AllDoneState';

export const TodosPage = () => {
  const {data, isPending} = useGetTodos();
  const navigate = useNavigate();

  if (isPending) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Button onClick={() => navigate('todo/new')}>Add task</Button>
      {data?.todos ? <TodoList todos={data?.todos} /> : <AllDoneState />}
    </div>
  );
};
