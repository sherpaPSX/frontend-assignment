import {TodoItem} from './TodoItem';
import {TodoResponse} from '../../api';
import {descend, groupBy, pipe, prop, sort} from 'ramda';
import {FC} from 'react';
import {AllDoneState} from './AllDoneState';

const groupTodos = (todos: TodoResponse[]) => {
  return pipe(
    (list: TodoResponse[]) => sort(descend(prop('createdAt')), list),
    groupBy((todo: TodoResponse) => (todo.completed ? 'completed' : 'pending')),
    (groups) => ({
      completed: groups.completed ?? [],
      pending: groups.pending ?? [],
    })
  )(todos);
};

interface Props {
  todos: TodoResponse[];
}

export const TodoList: FC<Props> = ({todos}) => {
  const {completed, pending} = groupTodos(todos);

  return (
    <>
      {pending.length > 0 ? (
        pending.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
        <AllDoneState />
      )}

      {completed.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  );
};
