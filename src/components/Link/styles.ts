import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: fit-content;
  transition: border-color 150ms ease;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.blue};
  }

  & > a {
    font-size: 0.75rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    gap: 0.5rem;
    max-width: fit-content;
    color: ${({ theme }) => theme.blue};
  }
`;
