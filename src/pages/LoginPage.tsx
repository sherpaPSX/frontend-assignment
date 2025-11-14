import {FC} from 'react';
import {LoginForm} from '../components';
import {PageCard} from '../components/ui';
import {Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export const LoginPage: FC = () => (
    <PageCard title="It’s good to have you back!">
      <Text color="text-secondary" mb={6}>
        Welcome to our secure portal! To access the full functionality of our app, kindly provide
        your credentials below. Your privacy is our priority.
      </Text>
      <LoginForm />
      <Text fontSize="text.small" color="text-secondary" textAlign="center" mt={4}>
        Don't have an account?{' '}
        <Link to="/register" color="fill-brand">
          Register
        </Link>
      </Text>
    </PageCard>
  );
