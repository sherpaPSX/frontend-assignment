import {Box, Card, Flex, Heading, Icon, IconButton} from '@chakra-ui/react';
import {FC, PropsWithChildren, ReactNode} from 'react';
import IconBack from '../../assets/icons/icon-backwards.svg';
import {useNavigate} from 'react-router-dom';

interface Props extends PropsWithChildren {
  title?: string;
  navigateBackPath?: string;
  headerButton?: ReactNode;
}

export const PageCard: FC<Props> = ({title, navigateBackPath, headerButton, children}) => {
  const navigate = useNavigate();
  return (
    <Card.Root padding={8} borderRadius={20}>
      <Card.Header marginBottom={6}>
        <Flex>
          <Box>
            {navigateBackPath && (
              <IconButton aria-label="Navigate back" onClick={() => navigate(navigateBackPath)}>
                <Icon as={IconBack} />
              </IconButton>
            )}
            {title && (
              <Heading as="h1" size="3xl" fontWeight="bold" fontSize="2xl">
                {title}
              </Heading>
            )}
          </Box>
          {headerButton && <Box marginLeft="auto">{headerButton}</Box>}
        </Flex>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  );
};
