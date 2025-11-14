import { FC, useState, useRef, useEffect } from 'react';
import { IconButton, Icon, Box, Text } from '@chakra-ui/react';
import { ReactComponent as IconMore } from '../../assets/icons/icon-more.svg';
import { ReactComponent as IconDelete } from '../../assets/icons/icon-delete.svg';
import { ReactComponent as IconCheck } from '../../assets/icons/icon-check.svg';
import { useCompleteTodo, useIncompleteTodo, useDeleteTodo } from '../../hooks';

type Props = {
    todoId: string;
    completed: boolean;
};

export const TodoListItemMenu: FC<Props> = ({ todoId, completed }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { mutate: mutateComplete } = useCompleteTodo();
    const { mutate: mutateIncomplete } = useIncompleteTodo();
    const { mutate: mutateDelete } = useDeleteTodo();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleToggleComplete = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (completed) {
            mutateIncomplete(todoId);
        } else {
            mutateComplete(todoId);
        }
        setIsOpen(false);
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        mutateDelete(todoId);
        setIsOpen(false);
    };

    const handleMenuToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <Box position="relative" ref={menuRef}>
            <IconButton aria-label="Todo actions" variant="ghost" size="sm" onClick={handleMenuToggle}>
                <Icon as={IconMore} color="text-secondary" />
            </IconButton>

            {isOpen ? (
                <Box
                    position="absolute"
                    right="0"
                    top="100%"
                    mt="1"
                    bg="white"
                    borderRadius="md"
                    boxShadow="lg"
                    borderWidth="1px"
                    borderColor="border.muted"
                    minW="10rem"
                    zIndex="dropdown"
                    overflow="hidden"
                >
                    <Box
                        as="button"
                        width="full"
                        textAlign="left"
                        px="3"
                        py="2"
                        cursor="pointer"
                        _hover={{ bg: 'fill-gray' }}
                        onClick={handleToggleComplete}
                        display="flex"
                        alignItems="center"
                        gap="2"
                    >
                        <Icon as={IconCheck} boxSize="4" />
                        <Text fontSize="sm">{completed ? 'Mark as Incomplete' : 'Mark as Complete'}</Text>
                    </Box>
                    <Box
                        as="button"
                        width="full"
                        textAlign="left"
                        px="3"
                        py="2"
                        cursor="pointer"
                        _hover={{ bg: 'fill-gray' }}
                        onClick={handleDelete}
                        display="flex"
                        alignItems="center"
                        gap="2"
                        color="text-danger"
                    >
                        <Icon as={IconDelete} boxSize="4" />
                        <Text fontSize="sm">Delete</Text>
                    </Box>
                </Box>
            ) : null}
        </Box>
    );
};
