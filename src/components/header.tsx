import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  CalendarIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { Box, Stack } from '@mui/material'

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        height: '3.5rem',
        backgroundColor: 'grey.50',
        borderBottom: '1px solid',
        borderColor: 'border.main',
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
            color: 'text.primary',
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
            borderColor: 'warning.main',
            borderRadius: '4px',
            fontWeight: 500,
            color: 'warning.main',
            fontSize: '14px',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'warning.main',
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
          borderColor: 'border.main',
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
            backgroundColor: 'grey.100',
            color: 'white',
            svg: {
              height: '1rem',
              width: '1rem',
              color: 'grey.A400',
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
          <Box component="p" sx={{ color: 'grey.800', fontSize: '10px' }}>
            Data
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: '1rem',
              color: 'grey.100',
              svg: { width: '1rem', height: '1rem', color: 'grey.700' },
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
        <Box component="p" sx={{ color: 'grey.800', fontSize: '10px' }}>
          Visualizando
        </Box>
        <Box
          component="p"
          sx={{
            fontSize: '1rem',
            fontWeight: 400,
            color: 'grey.100',
            svg: { width: '1rem', height: '1rem', color: 'grey.700' },
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
          bgcolor: 'primary.800',
          fontWeight: 500,
          fontSize: '1rem',
          color: 'primary.200',
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
