import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { GlobalStyled } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { GitHubProvider } from './context/useGitHub'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitHubProvider>
          <GlobalStyled />
          <Router />
        </GitHubProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
