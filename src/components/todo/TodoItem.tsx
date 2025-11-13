import {TodoResponse} from '../../api';
import {Link} from 'react-router-dom';
import {Box, Checkbox} from '@chakra-ui/react';

export const TodoItem = (todo: TodoResponse) => {
  return (
    <Box>
      <Checkbox.Root defaultChecked size="lg" borderRadius="md" colorScheme="green">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
      </Checkbox.Root>
      <Link to={`todo/${todo.id}`}>{todo.title}</Link>;
    </Box>
  );
};
