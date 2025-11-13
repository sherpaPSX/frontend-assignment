import {FC} from 'react';
import {Textarea, TextareaProps} from '@chakra-ui/react';
import {FieldWrapper, FieldWrapperProps} from './FieldWrapper';

type Props = TextareaProps & FieldWrapperProps;

export const TextareaField: FC<Props> = ({
  required,
  label,
  invalid,
  errorMessage,
  ...inputProps
}) => {
  return (
    <FieldWrapper invalid={invalid} errorMessage={errorMessage} label={label} required={required}>
      <Textarea {...inputProps} />
    </FieldWrapper>
  );
};
