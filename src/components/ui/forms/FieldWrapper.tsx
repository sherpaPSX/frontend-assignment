import {Field, Text} from '@chakra-ui/react';
import {FC, PropsWithChildren} from 'react';

export interface FieldWrapperProps extends PropsWithChildren {
  label?: string;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
}

export const FieldWrapper: FC<FieldWrapperProps> = ({
  required,
  label,
  invalid,
  errorMessage,
  children,
}) => {
  return (
    <Field.Root invalid={invalid} required={required} mb={4}>
      {label && (
        <Text fontSize="xs">
          <Field.RequiredIndicator color="text-danger" />
          {label}
        </Text>
      )}
      {children}
      {errorMessage && (
        <Text fontSize="xs" color="text-danger">
          {errorMessage}
        </Text>
      )}
    </Field.Root>
  );
};
