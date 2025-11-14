import {Center, Container, Flex, HStack, Image, Text} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';
import logo from '../../assets/logo.svg';

export const LoginLayout = () => {
  return (
    <Center>
      <Container maxWidth="lg">
        <Flex direction="column">
          <HStack justify="center" my={8} gap={3}>
            <Image
              src={logo}
              alt="Zentask logo"
              boxSize={8}
              objectFit="contain"
              objectPosition="center"
            />
            <Text fontSize={{base: 'xl', md: '2xl'}} fontWeight="bold" color="text-primary">
              Zentask
            </Text>
          </HStack>
          <Outlet />
        </Flex>
      </Container>
    </Center>
  );
};
