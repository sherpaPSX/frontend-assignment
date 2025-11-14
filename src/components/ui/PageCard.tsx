import {Box, Card, Heading, Stack, HStack, Icon, IconButton, Text} from '@chakra-ui/react';
import {FC, PropsWithChildren, ReactNode} from 'react';
import {ReactComponent as IconBack} from '../../assets/icons/icon-backwards.svg';
import {useNavigate} from 'react-router-dom';

interface Props extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  headerButton?: ReactNode;
}

export const PageCard: FC<Props> = ({title, subtitle, showBackButton, headerButton, children}) => {
  const navigate = useNavigate();
  return (
    <Card.Root padding={{base: 4, md: 8}} borderRadius={20}>
      <Card.Header marginBottom={6}>
        <Stack align="top" direction={{base: 'column', md: 'row'}} justify="space-between">
          <Box mb={{base: 4, md: 0}}>
            <HStack>
              {showBackButton && (
                <IconButton
                  aria-label="Navigate back"
                  size="xs"
                  bg="fill-gray"
                  onClick={() => navigate(-1)}
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
          {headerButton && <Box>{headerButton}</Box>}
        </Stack>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  );
};
