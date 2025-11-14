import {FC} from 'react';
import {Box, Heading, Text, Button} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {PageCard} from '../components/ui';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <PageCard>
      <Box textAlign="center">
        <Heading fontSize="7xl" fontWeight="bold" mb="4">
          404
        </Heading>
        <Text mb="8">Page not found</Text>
        <Button bg="fill-brand" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Box>
    </PageCard>
  );
};
