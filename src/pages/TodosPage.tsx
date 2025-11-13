import {useGetTodos} from '../hooks';
import {Button} from '@chakra-ui/react';
import {Link, useNavigate} from 'react-router-dom';

export const TodosPage = () => {
  const {data, isPending} = useGetTodos();
  const navigate = useNavigate();
  console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Button onClick={() => navigate('todo/new')}>Add task</Button>
      {data?.todos.map((todo) => (
        <Link to={`todo/${todo.id}`}>{todo.title}</Link>
      ))}
    </div>
  );
};
