import {TodoResponse} from '../../api';

import {HStack, Text} from '@chakra-ui/react';
import {CustomCheckbox} from '../ui/CustomCheckbox';
import {Link, useNavigate} from 'react-router-dom';

export const TodoItem = ({id, title}: TodoResponse) => {
  const navigate = useNavigate();
  return (
    <HStack>
      <CustomCheckbox checked={true} onChange={() => navigate(`todo/${id}`)} />
      <Link to={`todo/${id}/edit`}>
        <Text fontSize={18} fontWeight="normal">
          {title}
        </Text>
      </Link>
    </HStack>
  );
};
