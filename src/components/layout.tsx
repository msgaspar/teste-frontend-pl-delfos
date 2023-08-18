import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  MapIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Box, styled } from '@mui/system'
import { Sidebar } from './sidebar'
import { DashboardPage } from './dashboardPage'

const navigation = [
  { name: 'Dashboard', href: '#', icon: MapIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

export function Layout() {
  return (
    <Box sx={{ height: '100%', display: 'flex' }}>
      <Sidebar />
      <DashboardPage />
    </Box>
  )
}

const Sidebars = styled('div')`
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: primary;
  }

  display: none;

  @media (min-width: 1024px) {
    display: block;
    overflow-y: auto;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    padding-bottom: 1rem;
    width: 5rem;
    background-color: white;
  }

  > div {
    display: flex;
    shrink: 0;
    justify-content: center;
    align-items: center;
    height: 4rem;

    img {
      width: auto;
      height: 2rem;
    }
  }

  > nav {
    margin-top: 2rem;

    ul {
      display: flex;
      margin-top: 0.25rem;
      flex-direction: column;
      align-items: center;

      li {
        a {
          display: flex;
          padding: 0.75rem;
          column-gap: 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 600;
          line-height: 1.5rem;

          &.current {
            color: #ffffff;
            background-color: #1f2937;
          }

          &.not-current {
            color: #9ca3af;

            &:hover {
              color: #ffffff;
              background-color: #1f2937;
            }
          }

          svg {
            shrink: 0;
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
  }
`
