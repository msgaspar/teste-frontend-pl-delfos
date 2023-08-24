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
    primary: { main: '#FF7D1A' },
    border: { main: '#CFD4E5' },
    // grey: { light: '#ECEDEF' },
    // grey11: '#E5E9EE',
    // grey10: '#D6DCE3',
    // grey9: '#B1B9C3',
    // grey8: '#8C97A1',
    // grey7: '#8E91A4',
    // grey5: '#615E69',
    // grey2: '#0B1C2C',
    // grey1: '#0C111C',
    // orange2: '#FF7005',
    // orange8: '#FFE2CC',
    // red2: '#F42829',
    // borders: {
    //   lightGrey: '#CFD4E5',
    // },
    // bg: {
    //   grey: '#EFF2F4',
    // },
    // primaryText: '#212429',
    // dangerText: '#F42829',
  },
})
