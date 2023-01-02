import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  transition: border-color 150ms ease;
  color: ${({ theme }) => theme.typography.text};
  background-color: ${({ theme }) => theme.common.input};
  border: 1px solid ${({ theme }) => theme.common.border};

  &::placeholder {
    color: ${({ theme }) => theme.typography.label};
  }

  &:focus {
    border-color: ${({ theme }) => theme.blue};
  }
`;
