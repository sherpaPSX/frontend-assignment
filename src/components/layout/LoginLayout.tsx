import {Center, Container, Flex, HStack} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';
import {AppLogo} from '../app-header/AppLogo';

export const LoginLayout = () => {
  return (
    <Center>
      <Container maxWidth="lg">
        <Flex direction="column">
          <HStack justify="center" my={8} gap={3}>
            <AppLogo />
          </HStack>
          <Outlet />
        </Flex>
      </Container>
    </Center>
  );
};
