import { Box, Stack } from '@mui/system'
import { Header } from './header'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@reach/disclosure'
import {
  ExclamationTriangleIcon,
  HandRaisedIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline'

export function DashboardPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Header />

      <Box sx={{ display: 'flex', height: '100%' }}>
        <Box
          sx={{
            width: '40%',
            borderRight: '1px solid',
            borderColor: 'borders.lightGrey',
          }}
        >
          Mapa aqui
        </Box>
        <Box sx={{ padding: '1.5rem 1rem', width: '100%', maxWidth: '800px' }}>
          <Box
            component="h3"
            sx={{ color: 'grey2', fontWeight: 500, mb: '1.5rem' }}
          >
            Eventos em destaque que ocorreram no período selecionado:
          </Box>
          <Stack spacing="1rem">
            <EventsGroup icon={<ExclamationTriangleIcon />} />
            <EventsGroup icon={<HandRaisedIcon />} />
            <EventsGroup icon={<MegaphoneIcon />} />
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

const EventsGroup = (props: {
  icon?: React.ReactNode
  eventsCount?: number
  title?: string
  children?: React.ReactNode
}) => {
  return (
    <Box sx={{ '> button': { p: 0, width: '100%', bgcolor: 'transparent' } }}>
      <Disclosure>
        <DisclosureButton>
          <Box
            sx={{
              width: '100%',
              border: '1px solid',
              borderColor: 'borders.lightGrey',
              borderRadius: '8px 8px 0 0',
              bgcolor: 'lightGrey',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              px: '0.75rem',
              svg: {
                height: '1.5rem',
                width: '1.5rem',
                color: 'grey8',
                fontWeight: 700,
              },
            }}
          >
            {props.icon}
            oi
          </Box>
        </DisclosureButton>
        <DisclosurePanel>Here I am! I am the buried treasure!</DisclosurePanel>
      </Disclosure>
    </Box>
  )
}
