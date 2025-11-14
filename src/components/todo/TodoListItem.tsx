import {TodoResponse} from '../../api';
import {HStack, Text, VStack} from '@chakra-ui/react';
import {CustomCheckbox} from '../ui/CustomCheckbox';
import {Link} from 'react-router-dom';

export const TodoListItem = ({id, title, description}: TodoResponse) => {
  return (
    <HStack align="start">
      <CustomCheckbox checked={true} />
      <VStack align="start">
        <Link to={`todo/${id}`}>
          <Text fontSize={18} fontWeight="normal">
            {title}
          </Text>
        </Link>
        <Text color="text-secondary">{description}</Text>
      </VStack>
    </HStack>
  );
};
