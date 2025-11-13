import {Button, Flex, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export const AppHeader = () => {
  return (
    <Flex w="full" justify="space-between" align="center" mb={8}>
      <Text fontSize="2xl" fontWeight="bold">
        Logo
      </Text>
      <Text>
        <Link to="login">
          <Button colorScheme="blue">Login</Button>
        </Link>
        <Link to="register">
          <Button colorScheme="blue">Register</Button>
        </Link>
      </Text>
    </Flex>
  );
};
