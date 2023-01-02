import styled from 'styled-components';

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.common.profile};
  width: 864px;
  max-width: calc(100% - 3rem);
  padding: 2rem 2.5rem;
  margin: 0 auto;
  margin-top: -5.5rem;
  gap: 2rem;
  min-height: 13.25rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: 9.25rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.typography.title};
`;

export const Description = styled.p`
  font-weight: normal;
  color: ${({ theme }) => theme.typography.text};
`;

export const OrganizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 1.675rem;
    margin-top: 0;
  }
`;

export const OrganizationInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > img {
    width: 1rem;
    height: auto;
  }

  & > span {
    font-size: 1rem;
    color: ${({ theme }) => theme.typography.subtitle};
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

OrganizationInfoContainer.displayName = 'OrganizationInfoContainer';
OrganizationContainer.displayName = 'OrganizationContainer';
ProfileContainer.displayName = 'ProfileContainer';
TitleContainer.displayName = 'TitleContainer';
InfoContainer.displayName = 'InfoContainer';
InfoContainer.displayName = 'InfoContainer';
TextContainer.displayName = 'TextContainer';
ProfileImage.displayName = 'ProfileImage';
Description.displayName = 'Description';
Title.displayName = 'Title';
