import { Avatar, Button, Flex, HStack, Text } from '@chakra-ui/react';
import { useAuthStore } from '../../authStore';
import { AppLogo } from './AppLogo';

export const AppHeader = () => {
  const { username, logout } = useAuthStore();

  return (
    <Flex align="center" justify="space-between" mb={4}>
      <AppLogo />

      <HStack gap={4}>
        <Avatar.Root colorPalette="blue" size="sm">
          <Avatar.Fallback name={username || ''} />
        </Avatar.Root>
        <Text fontWeight="semibold" color="text-primary">
          {username}
        </Text>
        <Button
          variant="ghost"
          size="sm"
          color="text-secondary"
          onClick={logout}
          justifyContent="flex-end"
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};
