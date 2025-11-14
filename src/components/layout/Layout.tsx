import {Center, Container, Flex} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';
import {AppHeader} from '../app-header/AppHeader';

export const Layout = () => {
  return (
    <Center marginY="8">
      <Container maxWidth="3xl">
        <Flex direction="column" minH="100vh">
          <AppHeader />
          <Outlet />
        </Flex>
      </Container>
    </Center>
  );
};
