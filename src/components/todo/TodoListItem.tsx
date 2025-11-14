import {TodoResponse} from '../../api';
import {HStack, Text, VStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {useCompleteTodo, useIncompleteTodo} from '../../hooks';
import {TodoListItemMenu} from './TodoListItemMenu';
import {CustomCheckbox} from '../ui';

export const TodoListItem = ({id, title, description, completed}: TodoResponse) => {
  const {mutate: mutateComplete} = useCompleteTodo();
  const {mutate: mutateIncomplete} = useIncompleteTodo();

  const handleCheckboxClick = () => {
    const toggleMutation = completed ? mutateIncomplete : mutateComplete;
    toggleMutation(id);
  };

  return (
    <HStack align="start" justify="space-between" width="full">
      <HStack align="start" flex="1">
        <CustomCheckbox onCheck={handleCheckboxClick} checked={completed} />
        <VStack align="start" flex="1">
          <Link to={`todo/${id}`}>
            <Text fontSize={18} fontWeight="normal">
              {title}
            </Text>
          </Link>
          <Text color="text-secondary">{description}</Text>
        </VStack>
      </HStack>
      <TodoListItemMenu todoId={id} />
    </HStack>
  );
};
