import {FC} from 'react';
import {PasswordInput, PasswordInputProps} from '../password-input';

import {FieldWrapper, FieldWrapperProps} from './FieldWrapper';

type Props = PasswordInputProps & FieldWrapperProps;

export const PasswordField: FC<Props> = ({
  required,
  label,
  invalid,
  errorMessage,
  ...inputProps
}) => (
    <FieldWrapper invalid={invalid} errorMessage={errorMessage} label={label} required={required}>
      <PasswordInput {...inputProps} />
    </FieldWrapper>
  );
