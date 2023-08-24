/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    border: Palette['primary']
  }

  interface PaletteOptions {
    border?: PaletteOptions['primary']
  }
}

export const defaultTheme = createTheme({
  palette: {
    primary: { main: '#FF7D1A', 200: '#FF7005', 800: '#FFE2CC' },
    border: { main: '#CFD4E5' },
    grey: {
      50: '#EFF2F4',
      100: '#0C111C',
      200: '#0B1C2C',
      500: '#615E69',
      700: '#8E91A4',
      800: '#8C97A1',
      900: '#B1B9C3',
      A100: '#E5E9EE',
      A400: '#F9F9F9',
    },
    text: { primary: '#212429' },
    warning: { main: '#F42829' },
  },
})
