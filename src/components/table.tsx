import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import StatusImg from '../assets/statusImg.png'
import { Stack, TableSortLabel } from '@mui/material'
import { visuallyHidden } from '@mui/utils'

interface Data {
  id: number
  alarm: string
  assetType: string
  asset: string
  origin: string
  resp: string
  approved: boolean
}

const rows: Data[] = [
  {
    id: 92045,
    alarm: 'Purus viverra vulputate elit',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    origin: 'Environment',
    resp: 'Kira Madisen',
    approved: false,
  },
  {
    id: 92046,
    alarm: 'In facere voluptatem et nulla voluptatem',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    origin: 'Environment',
    resp: 'Kira Madisen',
    approved: false,
  },
  {
    id: 92047,
    alarm: 'Est optio porro ab optio cupiditate',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    origin: 'Environment',
    resp: 'Kira Madisen',
    approved: false,
  },
  {
    id: 92048,
    alarm: 'Et facere voluptatem cum laboriosam',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    origin: 'Environment',
    resp: 'Kira Madisen',
    approved: true,
  },
  {
    id: 92049,
    alarm: 'At quia unde qui enim minus',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    origin: 'Environment',
    resp: 'Kira Madisen',
    approved: true,
  },
  {
    id: 92050,
    alarm: 'Sed sint minima sit dolores praesentium',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    origin: 'Environment',
    resp: 'Kira Madisen',
    approved: false,
  },
]

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string | boolean },
  b: { [key in Key]: number | string | boolean }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void
  order: Order
  orderBy: string
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead
      sx={{
        bgcolor: '#D6DCE3',
        tr: { height: '64px' },
        th: { color: 'grey.600', padding: '0.5rem 1rem' },
      }}
    >
      <TableRow>
        {/* {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))} */}
        <TableCell sortDirection={orderBy === 'id' ? order : false}>
          <TableSortLabel
            active={orderBy === 'id'}
            direction={orderBy === 'id' ? order : 'asc'}
            onClick={createSortHandler('id')}
          >
            ID
            {orderBy === 'id' ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>

        <TableCell>Origem Status</TableCell>

        <TableCell sortDirection={orderBy === 'alarm' ? order : false}>
          <TableSortLabel
            active={orderBy === 'alarm'}
            direction={orderBy === 'alarm' ? order : 'asc'}
            onClick={createSortHandler('alarm')}
          >
            Alarme
            {orderBy === 'alarm' ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
        <TableCell>Asset Type</TableCell>
        <TableCell>Asset</TableCell>
        <TableCell>Origem Sistema</TableCell>
        <TableCell>Resp.</TableCell>
        <TableCell>Aprovado</TableCell>
        <TableCell>Ações</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('id')

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)),
    [order, orderBy]
  )

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Paper
        sx={{ width: '100%', mb: 2, borderRadius: '4px', overflow: 'hidden' }}
      >
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              td: {
                padding: '0.75rem 1rem',
                fontWeight: 500,
                borderBottom: 'none',
              },
            }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row) => {
                return (
                  <TableRow
                    hover
                    key={row.id}
                    sx={{
                      '&:nth-of-type(odd)': {
                        backgroundColor: '#FFF',
                      },
                      '&:nth-of-type(even)': {
                        backgroundColor: '#F9F9F9',
                      },
                    }}
                  >
                    <TableCell align="center" sx={{ color: 'grey.500' }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                      <Stack direction="row" alignItems="center" spacing="4px">
                        <img src={StatusImg} />
                        <Box
                          sx={{
                            width: '1rem',
                            height: '1rem',
                            bgcolor: 'warning.main',
                            borderRadius: '50%',
                          }}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        textOverflow: 'ellipsis',
                        maxWidth: '120px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        color: 'grey.200',
                      }}
                    >
                      {row.alarm}
                    </TableCell>
                    <TableCell sx={{ color: 'grey.500' }}>
                      {row.assetType}
                    </TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap', color: 'grey.500' }}>
                      {row.asset}
                    </TableCell>
                    <TableCell sx={{ color: 'grey.500' }}>
                      {row.origin}
                    </TableCell>
                    <TableCell sx={{ color: 'grey.500' }}>{row.resp}</TableCell>
                    <TableCell align="center">
                      {row.approved ? (
                        <Box
                          sx={{
                            margin: '0 auto',
                            bgcolor: '#1FD3A6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '1.5rem',
                            height: '1.5rem',
                            borderRadius: '50%',
                            svg: {
                              width: '1rem',
                              height: '1rem',
                              color: '#FFF',
                            },
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            margin: '0 auto',
                            width: '1.5rem',
                            height: '1.5rem',
                            border: '1px solid',
                            borderColor: 'grey.900',
                            borderRadius: '50%',
                          }}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          border: '1px solid',
                          borderColor: 'grey.900',
                          borderRadius: '4px',
                          width: '30px',
                          height: '30px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          svg: {
                            width: '1.25rem',
                            height: '1.25rem',
                            color: 'grey.500',
                          },
                        }}
                      >
                        <ChevronDownIcon />
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
