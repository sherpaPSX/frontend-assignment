import {Button, Flex, Text} from '@chakra-ui/react';
import {useAuthStore} from '../../authStore';

export const AppHeader = () => {
  const {username, logout} = useAuthStore();
  return (
    <Flex w="full" justify="space-between" align="center" mb={8}>
      <Text fontSize="2xl" fontWeight="bold">
        Logo
      </Text>
      <Flex align="center" gap={4}>
        <Text>{username}</Text>
        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};
