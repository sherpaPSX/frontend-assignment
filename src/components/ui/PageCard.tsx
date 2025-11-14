import {Box, Card, Heading, Stack, HStack, Icon, IconButton, Text} from '@chakra-ui/react';
import {FC, PropsWithChildren, ReactNode} from 'react';
import {ReactComponent as IconBack} from '../../assets/icons/icon-backwards.svg';
import {useNavigate} from 'react-router-dom';

interface Props extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  navigateBackPath?: string;
  headerButton?: ReactNode;
}

export const PageCard: FC<Props> = ({
  title,
  subtitle,
  navigateBackPath,
  headerButton,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <Card.Root padding={8} borderRadius={20}>
      <Card.Header marginBottom={6}>
        <Stack align="top" direction={{base: 'column', md: 'row'}}>
          <Box>
            <HStack>
              {navigateBackPath && (
                <IconButton
                  aria-label="Navigate back"
                  size="xs"
                  bg="fill-gray"
                  onClick={() => navigate(navigateBackPath)}
                >
                  <Icon as={IconBack} color="text-primary" />
                </IconButton>
              )}
              {title && (
                <Heading as="h1" size="3xl" fontWeight="bold" fontSize="2xl">
                  {title}
                </Heading>
              )}
            </HStack>
            {subtitle && (
              <Text mt={2} color="text-tertiary">
                {subtitle}
              </Text>
            )}
          </Box>
          {headerButton && <Box marginLeft="auto">{headerButton}</Box>}
        </Stack>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  );
};
