import {TodoResponse} from '../../api';
import {descend, groupBy, pipe, prop, sort} from 'ramda';
import {FC} from 'react';
import {AllDoneState} from './AllDoneState';
import {TodoGroup} from './TodoGroup';
import {Flex} from '@chakra-ui/react';

const groupTodos = (todos: TodoResponse[]) => pipe(
    (list: TodoResponse[]) => sort(descend(prop('createdAt')), list),
    groupBy((todo: TodoResponse) => (todo.completed ? 'completed' : 'pending')),
    (groups) => ({
      completed: groups.completed ?? [],
      pending: groups.pending ?? [],
    })
  )(todos);

interface Props {
  todos: TodoResponse[];
}

export const TodoList: FC<Props> = ({todos}) => {
  const {completed, pending} = groupTodos(todos);

  return (
    <Flex gap={6} flexDirection="column" gapY="12">
      {pending.length > 0 ? <TodoGroup title="To-do" todos={pending} /> : <AllDoneState />}
      <TodoGroup title="Completed" todos={completed} />
    </Flex>
  );
};
