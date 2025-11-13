// `src/components/todo/AllDoneState.tsx`
import logo from '../../assets/logo.svg';
import {EmptyState, Image, VStack} from '@chakra-ui/react';

export const AllDoneState = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Image src={logo} alt="All done" />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>You are amazing!</EmptyState.Title>
          <EmptyState.Description>There is no more task to do.</EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};
