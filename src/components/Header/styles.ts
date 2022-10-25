import styled from 'styled-components';

import effectLeft from '@/assets/images/effect-left.svg';
import effectRight from '@/assets/images/effect-right.svg';

export const HeaderContainer = styled.header`
  height: 14.5rem;
  background-color: ${({ theme }) => theme.common.profile};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${effectLeft});

  @media (min-width: 768px) {
    background-image: url(${effectLeft}), url(${effectRight});
    background-position: center left, center right;
    background-size: auto 188px, auto 236px;
    height: 18.5rem;
  }
`;

export const HeaderContent = styled.div`
  width: 1120px;
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-top: 2rem;

  @media (min-width: 768px) {
    padding-top: 4rem;
  }
`;

export const HeaderImage = styled.img`
  width: 148px;
  height: auto;
`;

HeaderContainer.displayName = 'HeaderContainer';
HeaderContent.displayName = 'HeaderContent';
HeaderImage.displayName = 'HeaderImage';
