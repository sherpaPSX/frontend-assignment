import {Center, Container, Flex} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';
import {AppHeader} from '../app-header/AppHeader';

export const Layout = () => (
  <Center paddingTop="2">
    <Container maxWidth="3xl" padding="2">
      <Flex direction="column">
        <AppHeader />
        <Outlet />
      </Flex>
    </Container>
  </Center>
);
