import { Header, Profile, TextInput } from '@/components';

import { ContentContainer } from './styles';

export function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Profile />
      <ContentContainer>
        <TextInput placeholder="Buscar conteúdo" />
      </ContentContainer>
    </>
  );
}
