import {FC} from 'react';
import {TodoResponse} from '../../api';
import {Box, Heading} from '@chakra-ui/react';
import {TodoItem} from './TodoItem';

interface Props {
  title: string;
  todos?: Array<TodoResponse>;
}

export const TodoGroup: FC<Props> = ({title, todos}) => {
  if (!todos || todos.length === 0) {
    return null;
  }

  return (
    <Box>
      <Box borderBottom="xs" borderColor="gray.200" mb={4} pb={2}>
        <Heading size="md" mb={2} fontWeight="bold">
          {title}
        </Heading>
      </Box>
      <Box>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id} />
        ))}
      </Box>
    </Box>
  );
};
