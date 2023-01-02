import { AnchorHTMLAttributes, forwardRef } from 'react';

import linkIcon from '@/assets/images/link-icon.svg';

import { StyledContainer } from './styles';

export const Link = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, ...props }, ref): JSX.Element => {
  return (
    <StyledContainer>
      <a {...props} ref={ref}>
        {children}
        <img src={linkIcon} alt="Seta diagonal para cima" />
      </a>
    </StyledContainer>
  );
});

Link.displayName = 'Link';
