import {Box, Center, Container, Flex} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';

export const LoginLayout = () => {
  return (
    <Center>
      <Container maxWidth="lg">
        <Flex direction="column">
          <Box height="max" bg="fill-white" p={6}>
            <Outlet />
          </Box>
        </Flex>
      </Container>
    </Center>
  );
};
