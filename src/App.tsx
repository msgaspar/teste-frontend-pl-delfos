import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Layout } from './components/layout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}
