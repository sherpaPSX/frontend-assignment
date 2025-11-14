import {TodoResponse} from '../../api';

import {HStack, Text, VStack} from '@chakra-ui/react';
import {CustomCheckbox} from '../ui/CustomCheckbox';
import {Link, useNavigate} from 'react-router-dom';

export const TodoItem = ({id, title, description}: TodoResponse) => {
  const navigate = useNavigate();
  return (
    <HStack align="start">
      <CustomCheckbox checked={true} onChange={() => navigate(`todo/${id}`)} />
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
