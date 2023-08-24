import { Box } from '@mui/material'
import { Sidebar } from './sidebar'
import { DashboardPage } from './dashboardPage'

export function Layout() {
  return (
    <Box sx={{ height: '100%', display: 'flex' }}>
      <Sidebar />
      <DashboardPage />
    </Box>
  )
}
