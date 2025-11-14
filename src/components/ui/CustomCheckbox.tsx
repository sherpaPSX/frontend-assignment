import {Checkbox, UseCheckboxProps} from '@chakra-ui/react';
import {FC} from 'react';

export const CustomCheckbox: FC<UseCheckboxProps> = (props) => (
  <Checkbox.Root {...props} colorPalette="blue" borderRadius="xl" size="lg">
    <Checkbox.Control />
  </Checkbox.Root>
);
