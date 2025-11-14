import { Checkbox } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  checked?: boolean;
  onCheckedChange?: (details: { checked: boolean | 'indeterminate' }) => void;
};

export const CustomCheckbox: FC<Props> = ({ checked, onCheckedChange }) => (
  <Checkbox.Root
    checked={checked}
    onCheckedChange={onCheckedChange}
    colorPalette="blue"
    size="lg"
  >
    <Checkbox.HiddenInput />
    <Checkbox.Control />
  </Checkbox.Root>
);
