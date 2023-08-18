import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  CalendarIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { Box, Stack } from '@mui/system'

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        height: '3.5rem',
        backgroundColor: 'background.lightGrey',
        borderBottom: '1px solid',
        borderColor: 'borders.lightGrey',
        display: 'flex',
        alignItems: 'center',
        px: '1rem',
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        spacing="1rem"
        sx={{ height: '100%', alignItems: 'center', flexGrow: 1 }}
      >
        <Box
          component="h3"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'text.dark',
          }}
        >
          Highlights
        </Box>
        <Box
          sx={{
            height: '28px',
            px: '0.5rem',
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            border: '1px solid',
            borderColor: 'text.danger',
            borderRadius: '4px',
            fontWeight: 500,
            color: 'text.danger',
            fontSize: '14px',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'text.danger',
              width: '8px',
              height: '8px',
              borderRadius: '4px',
              marginRight: '4px',
            }}
          ></Box>
          Real time
        </Box>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderRight: '1px solid',
          borderColor: 'borders.lightGrey',
          height: '100%',
        }}
      >
        <Box
          sx={{
            width: '2rem',
            height: '2rem',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey1',
            color: 'white',
            svg: {
              height: '1rem',
              width: '1rem',
            },
          }}
        >
          <CalendarIcon />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            fontWeight: 500,
          }}
        >
          <Box component="p" sx={{ color: 'grey8', fontSize: '10px' }}>
            Data
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: '1rem',
              color: 'grey1',
              svg: { width: '1rem', height: '1rem', color: 'grey7' },
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingRight: '4px',
            }}
          >
            27.07.2023
            <ChevronDownIcon />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          fontWeight: 500,
          px: '1rem',
        }}
      >
        <Box component="p" sx={{ color: 'grey8', fontSize: '10px' }}>
          Visualizando
        </Box>
        <Box
          component="p"
          sx={{
            fontSize: '1rem',
            fontWeight: 400,
            color: 'grey1',
            svg: { width: '1rem', height: '1rem', color: 'grey7' },
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          Portifolio
          <ChevronRightIcon />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'orange8',
          fontWeight: 500,
          fontSize: '1rem',
          color: 'orange2',
          borderRadius: '4px',
          height: '2rem',
          px: '0.5rem',
          svg: { width: '1rem', height: '1rem' },
        }}
      >
        <p style={{ marginRight: '8px' }}>Parque Ventos do Agreste</p>
        <ChevronUpDownIcon />
        <XMarkIcon />
      </Box>
    </Box>
  )
}
