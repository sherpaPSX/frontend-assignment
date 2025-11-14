import {TodoResponse} from '../../api';
import {HStack, Text, VStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {useCompleteTodo, useIncompleteTodo} from '../../hooks';
import {TodoListItemMenu} from './TodoListItemMenu';

export const TodoListItem = ({id, title, description, completed}: TodoResponse) => {
  const {mutate: mutateComplete} = useCompleteTodo();
  const {mutate: mutateIncomplete} = useIncompleteTodo();

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (completed) {
      mutateIncomplete(id);
    } else {
      mutateComplete(id);
    }
  };

  return (
    <HStack align="start" justify="space-between" width="full">
      <HStack align="start" flex="1">
        <button
          onClick={handleCheckboxClick}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            border: '2px solid',
            borderColor: completed ? '#0F62FE' : '#D0D5DD',
            backgroundColor: completed ? '#0F62FE' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'all 0.2s',
            padding: 0,
          }}
        >
          {completed ? (
            <span style={{color: 'white', fontSize: '16px', lineHeight: '1'}}>✓</span>
          ) : null}
        </button>
        <VStack align="start" flex="1">
          <Link to={`todo/${id}`}>
            <Text fontSize={18} fontWeight="normal">
              {title}
            </Text>
          </Link>
          <Text color="text-secondary">{description}</Text>
        </VStack>
      </HStack>
      <TodoListItemMenu todoId={id} completed={completed} />
    </HStack>
  );
};
