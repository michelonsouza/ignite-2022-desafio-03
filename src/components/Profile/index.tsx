// import { GithubIcon } from 'phosphor-react';

import buildingIcon from '@/assets/images/building-icon.svg';
import followersIcon from '@/assets/images/followers-icon.svg';
import githubIcon from '@/assets/images/github-logo.svg';

import {
  ProfileContainer,
  ProfileImage,
  InfoContainer,
  Title,
  TextContainer,
  Description,
  OrganizationContainer,
  OrganizationInfoContainer,
} from './styles';

export function Profile(): JSX.Element {
  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/michelonsouza.png" />
      <InfoContainer>
        <TextContainer>
          <Title>Michelon Souza</Title>
          <Description>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Description>
        </TextContainer>
        <OrganizationContainer>
          <OrganizationInfoContainer>
            <img src={githubIcon} alt="Github" />
            <span>cameronwll</span>
          </OrganizationInfoContainer>
          <OrganizationInfoContainer>
            <img src={buildingIcon} alt="Building" />
            <span>Clicksign</span>
          </OrganizationInfoContainer>
          <OrganizationInfoContainer>
            <img src={followersIcon} alt="Fallowers" />
            <span>45 seguidores</span>
          </OrganizationInfoContainer>
        </OrganizationContainer>
      </InfoContainer>
    </ProfileContainer>
  );
}
