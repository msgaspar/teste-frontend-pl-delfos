import { Box, ThemeProvider, styled } from '@mui/system'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles>
        <Box sx={{ color: 'primary' }}>Hello, world!!</Box>
      </GlobalStyles>
      <Title>Alouu</Title>
    </ThemeProvider>
  )
}

const Title = styled('h1')(({ theme }) => ({
  color: theme.palette.primary,
}))
