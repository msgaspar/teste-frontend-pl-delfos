import { GlobalStyles as Global } from '@mui/system'
import { PropsWithChildren } from 'react'

export function GlobalStyles({ children }: PropsWithChildren) {
  return (
    <Global
      styles={{
        body: {
          backgroundColor: 'pink',
        },
      }}
    >
      {{ children }}
    </Global>
  )
}
