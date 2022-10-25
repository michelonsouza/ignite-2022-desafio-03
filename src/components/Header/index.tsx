import githubBlogLogo from '@/assets/images/github-blog-logo.svg';

import { HeaderContainer, HeaderContent, HeaderImage } from './styles';

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderImage src={githubBlogLogo} alt="Github Blog Logo" />
      </HeaderContent>
    </HeaderContainer>
  );
}
