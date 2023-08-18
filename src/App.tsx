import { Box, ThemeProvider, styled } from '@mui/system'
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

const Title = styled('h1')(({ theme }) => ({
  color: theme.palette.primary,
}))
