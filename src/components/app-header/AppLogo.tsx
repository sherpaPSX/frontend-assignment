import {HStack, Image, Text} from '@chakra-ui/react';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

export const AppLogo = () => (
    <Link to="/">
      <HStack justify="center">
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
    </Link>
  );
