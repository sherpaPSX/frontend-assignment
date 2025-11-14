import {FC} from 'react';
import {Input, InputProps} from '@chakra-ui/react';
import {FieldWrapper, FieldWrapperProps} from './FieldWrapper';

type Props = InputProps & FieldWrapperProps;

export const InputField: FC<Props> = ({required, label, invalid, errorMessage, ...inputProps}) => (
    <FieldWrapper invalid={invalid} errorMessage={errorMessage} label={label} required={required}>
      <Input {...inputProps} />
    </FieldWrapper>
  );
