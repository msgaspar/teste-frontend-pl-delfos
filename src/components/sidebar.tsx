import {
  ArrowRightOnRectangleIcon,
  ArrowTrendingDownIcon,
  Bars3Icon,
  BeakerIcon,
  ChartBarIcon,
  ClipboardIcon,
  Cog8ToothIcon,
  MapIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline'
import { Box, styled } from '@mui/material'

// const navigation = [
//   { name: 'Dashboard', href: '#', icon: MapIcon, current: true },
//   { name: 'Team', href: '#', icon: UsersIcon, current: false },
//   { name: 'Projects', href: '#', icon: FolderIcon, current: false },
//   { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
//   { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
//   { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
// ]

export function Sidebar() {
  return (
    <SidebarWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <SidebarButton icon={<Bars3Icon />} />
        <Box
          component="nav"
          sx={{
            mt: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <SidebarButton icon={<MapIcon />} selected />
          <SidebarButton icon={<MegaphoneIcon />} />
          <SidebarButton icon={<ChartBarIcon />} />
          <SidebarButton icon={<ArrowTrendingDownIcon />} />
          <SidebarButton icon={<BeakerIcon />} />
          <SidebarButton icon={<ClipboardIcon />} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <SidebarButton icon={<Cog8ToothIcon />} />
        <SidebarButton icon={<ArrowRightOnRectangleIcon />} />
        <SidebarButton icon={<Icon />} />
      </Box>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  paddingBottom: '2rem',
  paddingTop: '2rem',
  height: '100%',
  width: '3.5rem',
  border: `1px solid ${theme.palette.border.main}`,
}))

const SidebarButton = (props: {
  icon: React.ReactNode
  selected?: boolean
}) => {
  return (
    <Box
      sx={{
        w: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        svg: {
          color: props.selected ? 'primary.main' : 'grey.900',
          height: '1.5rem',
          width: '1.5rem',
          transition: 'color 0.2s ease-in-out',
        },
        '&::before': props.selected
          ? {
              content: '""',
              position: 'absolute',
              top: '-1rem',
              left: 0,
              bottom: '-1rem',
              backgroundColor: 'primary.main',
              width: '4px',
              borderTopRightRadius: '4px',
              borderBottomRightRadius: '4px',
            }
          : undefined,
      }}
    >
      <Box
        component="a"
        sx={{
          '&:hover': {
            cursor: 'pointer',
            svg: {
              color: 'primary',
            },
          },
        }}
      >
        {props.icon}
      </Box>
    </Box>
  )
}

const Icon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.6886 4.17261L3.55266 4.30855V5.13355V5.95386L2.44172 5.96792C1.2136 5.98199 1.1761 5.99136 1.04016 6.2773C0.955787 6.46011 1.00735 6.68511 1.16672 6.83042C1.26047 6.9148 1.44797 6.91949 5.91516 6.92886C9.55735 6.93824 10.5839 6.92886 10.6777 6.88199C10.7433 6.84917 10.8323 6.74605 10.8839 6.64761C10.9589 6.48824 10.9636 6.45074 10.9027 6.29605C10.7902 5.98667 10.673 5.95855 9.44954 5.95855H8.38079V5.18511C8.38079 4.19136 8.31516 4.03667 7.8886 4.03667C7.76204 4.03667 7.68235 4.07417 7.57922 4.17261L7.44329 4.30855V5.13355V5.95855H5.96672H4.49016V5.13355V4.30855L4.35422 4.17261C4.24641 4.0648 4.1761 4.03667 4.02141 4.03667C3.86672 4.03667 3.79641 4.0648 3.6886 4.17261Z"
      fill="#FF7D1A"
    />
    <path
      d="M19.4667 4.94138C19.1245 5.29294 18.2854 6.43201 17.8448 7.14451C17.0808 8.36794 16.4948 9.75544 16.3261 10.7258C16.237 11.2367 16.237 12.1179 16.3261 12.5445C16.462 13.2054 16.9589 14.007 17.5073 14.457C17.9901 14.8508 18.6558 15.1648 19.2229 15.2586L19.3964 15.2914V12.9992C19.3964 11.7383 19.4104 10.6414 19.4245 10.557C19.4714 10.332 19.6542 10.1773 19.8745 10.1773C20.1089 10.1773 20.2214 10.2383 20.3104 10.4117C20.3714 10.5289 20.3808 10.8945 20.3808 12.9195V15.2914L20.5589 15.2586C22.2229 14.9586 23.3995 13.6554 23.5495 11.9586C23.6761 10.482 22.8042 8.24138 21.2948 6.16482C20.6901 5.33982 20.2495 4.80544 20.1183 4.74451C19.8698 4.63201 19.7198 4.67888 19.4667 4.94138Z"
      fill="#FF7D1A"
    />
    <path
      d="M2.09961 8.21791C2.09961 9.16479 2.25898 9.82104 2.63867 10.4679C3.19648 11.4195 4.25117 12.1601 5.26367 12.3148L5.47461 12.3429V13.6789C5.47461 15.146 5.5168 15.6945 5.68555 16.3648C6.27617 18.732 8.28242 20.5507 10.7246 20.9398C11.1043 21.0007 11.5262 21.0101 13.148 20.9914C14.9246 20.9726 15.1449 20.9632 15.5059 20.8742C16.3262 20.6773 17.0293 20.3726 17.6996 19.9179C18.1824 19.5898 18.8527 18.9335 19.209 18.4367C19.7293 17.7148 20.2402 16.4914 20.2402 15.9804C20.2402 15.6195 19.8793 15.4132 19.5418 15.5914C19.3965 15.6617 19.373 15.7179 19.1855 16.3414C18.9277 17.1945 18.4684 17.9492 17.8121 18.5773C17.0574 19.2992 16.2887 19.7117 15.2246 19.9507C14.9434 20.0164 14.5496 20.0351 13.2418 20.0539C11.0949 20.082 10.5324 20.0164 9.61367 19.632C8.84961 19.3085 8.00586 18.6476 7.48555 17.9632C7.16211 17.5367 6.76367 16.7117 6.61367 16.1539C6.4918 15.6945 6.48711 15.6523 6.46836 14.0164L6.44961 12.3476L6.74492 12.2914C8.28242 11.9867 9.5293 10.6789 9.78242 9.09916C9.81055 8.93041 9.83398 8.53666 9.83398 8.21791V7.64604H5.9668H2.09961V8.21791Z"
      fill="#FF7D1A"
    />
  </svg>
)
