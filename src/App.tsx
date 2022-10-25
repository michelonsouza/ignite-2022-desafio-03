import { ThemeProvider } from 'styled-components';

import { Home } from './pages';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
