import {Button, Flex, HStack, Image, Stack, Text, Box} from '@chakra-ui/react';
import {useAuthStore} from '../../authStore';
import logo from '../../assets/logo.svg';

export const AppHeader = () => {
  const {username, logout} = useAuthStore();
  const initials = username ? username.charAt(0).toUpperCase() : '?';

  return (
    <Flex align="center" justify="space-between">
      <HStack gap={3}>
        <Image src={logo} alt="Zentask logo" boxSize={{base: 8, md: 10}} />
        <Text fontSize={{base: 'xl', md: '2xl'}} fontWeight="bold" color="text-primary">
          Zentask
        </Text>
      </HStack>

      <HStack gap={4}>
        <Stack gap={0} textAlign="right">
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
        </Stack>
        <Box
          borderRadius="full"
          bg="fill-brand"
          color="text-white"
          fontWeight="semibold"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={{base: 10, md: 12}}
          height={{base: 10, md: 12}}
        >
          {initials}
        </Box>
      </HStack>
    </Flex>
  );
};
