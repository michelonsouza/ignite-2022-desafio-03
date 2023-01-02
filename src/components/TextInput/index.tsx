import { forwardRef, HTMLAttributes } from 'react';

import { StyledInput } from './styles';

export const TextInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, ref): JSX.Element => {
  return <StyledInput {...props} ref={ref} />;
});

TextInput.displayName = 'TextInput';
