import {FC, useState, useRef, useEffect, PropsWithChildren} from 'react';
import {IconButton, Icon, Box, Text} from '@chakra-ui/react';
import {ReactComponent as IconMore} from '../../assets/icons/icon-more.svg';
import {ReactComponent as IconDelete} from '../../assets/icons/icon-delete.svg';
import {ReactComponent as IconEdit} from '../../assets/icons/icon-edit.svg';
import {useDeleteTodo} from '../../hooks';
import {useNavigate} from 'react-router-dom';

/**
 * I was not able to use Chakra UI's Menu because there is a some clash with the importing Menu.[SubItems] components
 * So I created a custom simple menu component for the todo list item
 */

interface MenuItemProps extends PropsWithChildren {
  onClick: () => void;
}

const MenuItem: FC<MenuItemProps> = ({children, onClick}) => (
  <Box
    as="button"
    width="full"
    textAlign="left"
    p="3"
    cursor="pointer"
    _hover={{bg: 'fill-gray'}}
    onClick={onClick}
    display="flex"
    alignItems="center"
    gap="2"
  >
    {children}
  </Box>
);

interface Props {
  todoId: string;
}

export const TodoListItemMenu: FC<Props> = ({todoId}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const {mutate: mutateDelete} = useDeleteTodo();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleDelete = () => {
    mutateDelete(todoId);
    setIsOpen(false);
  };

  const handleEdit = () => {
    navigate(`todo/${todoId}/edit`);
    setIsOpen(false);
  };

  return (
    <Box position="relative" ref={menuRef}>
      <IconButton
        aria-label="Todo actions"
        variant="ghost"
        size="xs"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon as={IconMore} />
      </IconButton>

      {isOpen && (
        <Box
          position="absolute"
          right="0"
          top="100%"
          mt="1"
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          borderWidth="1px"
          borderColor="border.muted"
          zIndex="dropdown"
          minWidth="8rem"
        >
          <MenuItem onClick={handleEdit}>
            <Icon as={IconEdit} boxSize="4" />
            <Text fontSize="sm">Edit</Text>
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <Icon as={IconDelete} boxSize="4" color="text-danger" />
            <Text fontSize="sm" color="text-danger">
              Delete
            </Text>
          </MenuItem>
        </Box>
      )}
    </Box>
  );
};
