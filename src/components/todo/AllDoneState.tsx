// `src/components/todo/AllDoneState.tsx`
import logo from '../../assets/logo.svg';
import {EmptyState, Image, VStack} from '@chakra-ui/react';

export const AllDoneState = () => (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Image src={logo} alt="All done" />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title fontWeight="bold">You are amazing!</EmptyState.Title>
          <EmptyState.Description fontSize="sm" color="text-secondary">
            There is no more task to do.
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
