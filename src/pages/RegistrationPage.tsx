import {FC} from 'react';
import {PageCard} from '../components/ui';
import {Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {RegistrationForm} from '../components';

export const RegistrationPage: FC = () => (
  <PageCard title="Create your account">
    <Text color="text-secondary" mb="6">
      Welcome to our secure portal! To access the full functionality of our app, kindly provide your
      credentials below. Your privacy is our priority.
    </Text>
    <RegistrationForm />
    <Text fontSize="sm" color="text-secondary" textAlign="center" mt="4">
      Already have an account?{' '}
      <Link to="/login" color="fill-brand">
        Login
      </Link>
    </Text>
  </PageCard>
);
