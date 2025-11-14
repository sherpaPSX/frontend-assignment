import {Icon, IconButton, useToken} from '@chakra-ui/react';
import {ReactComponent as IconCheck} from '../../assets/icons/icon-check.svg';
import {FC} from 'react';

/**
 * I was not able to override Chakra UI's Checkbox because there is a some clash with the importing Checkbox.[SubItems] components
 * So I had to create a custom solution
 */

interface Props {
  checked?: boolean;
  onCheck?: () => void;
}

export const CustomCheckbox: FC<Props> = ({checked = false, onCheck}) => {
  const [borderColor, bgColor] = useToken('colors', [
    checked ? 'blue.500' : 'gray.300',
    checked ? 'blue.500' : 'transparent',
  ]);

  return (
    <IconButton
      onClick={onCheck}
      size="xs"
      borderWidth="2px"
      borderColor={borderColor}
      bg={bgColor}
      transition="all 0.2s"
      _hover={{
        bg: checked ? 'fill-brand' : 'gray.100',
        boxShadow: checked ? '0 0 0 4px #0F62FE33' : 'none',
      }}
    >
      {checked && <Icon as={IconCheck} color="text-white" />}
    </IconButton>
  );
};
