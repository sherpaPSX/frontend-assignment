import {Center, Container, Flex} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';
import {AppHeader} from '../app-header/AppHeader';

export const Layout = () => {
  return (
    <Center>
      <Container maxWidth="3xl" padding={2}>
        <Flex direction="column" minH="100vh">
          <AppHeader />
          <Outlet />
        </Flex>
      </Container>
    </Center>
  );
};
