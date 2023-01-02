import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 864px;
  max-width: calc(100% - 3rem);
  margin-top: -5.5rem;
  margin: 2rem auto;

  @media (min-width: 768px) {
    margin: 4.5rem auto;
  }
`;
