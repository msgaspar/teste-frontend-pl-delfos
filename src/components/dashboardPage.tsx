import React from 'react'
import { Box, Stack } from '@mui/material'
import { Header } from './header'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@reach/disclosure'
import {
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
  HandRaisedIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import CustomizedTables from './table'

export function DashboardPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Header />

      <Box sx={{ display: 'flex', height: '100%' }}>
        <Box
          sx={{
            width: '40%',
            borderRight: '1px solid',
            borderColor: 'border.main',
          }}
        >
          Mapa aqui
        </Box>
        <Box sx={{ padding: '1.5rem 1rem', width: '100%', maxWidth: '800px' }}>
          <Box
            component="h3"
            sx={{ color: 'grey.200', fontWeight: 500, mb: '1.5rem' }}
          >
            Eventos em destaque que ocorreram no período selecionado:
          </Box>
          <Stack spacing="1rem">
            <EventsGroup
              icon={<ExclamationTriangleIcon />}
              eventsCount={19}
              title="Riscos"
            >
              <RiskCard
                title="Geração Baixa"
                subtitle="A geração do parque está muito abaixo da meta deste mês"
                btnText="Ver análise"
              >
                <Stack direction="row" spacing="1.5rem">
                  <Box
                    sx={{
                      fontWeight: 500,
                      fontSize: '14px',
                      color: 'grey.200',
                      h3: {
                        fontSize: '28px',
                        fontWeight: 600,
                        marginTop: '4px',
                      },
                    }}
                  >
                    <p>Valor atual</p>
                    <h3>60.5 Mwh</h3>
                  </Box>

                  <Box
                    sx={{
                      svg: {
                        width: '1.25rem',
                        height: '1.25rem',
                        display: 'inline',
                      },
                      display: 'flex',
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      paddingBottom: '4px',
                      color: 'warning.main',
                      fontWeight: 500,
                      span: {
                        color: 'grey.800',
                      },
                    }}
                  >
                    <p>
                      <ArrowTrendingDownIcon />
                      24%
                    </p>
                    <span>VS PREV. 30 DIAS</span>
                  </Box>

                  <Stack direction="row" spacing="1rem">
                    <Box
                      sx={{
                        height: '46px',
                        alignSelf: 'flex-end',
                        '> p': {
                          fontSize: '12px',
                          fontWeight: 500,
                        },
                        '.bar-container': {
                          position: 'relative',
                          width: '160px',
                          height: '24px',
                        },
                        '.bar-bg': {
                          width: '100%',
                          height: '18px',
                          backgroundColor: 'grey.A100',
                          position: 'absolute',
                          bottom: 0,
                          borderRadius: '2px',
                          overflow: 'hidden',
                        },
                        '.bar-fill': {
                          width: 'calc(60.5 / (329.09 * 1.2) * 100%)',
                          backgroundColor: 'red',
                          height: '18px',
                          position: 'absolute',
                          borderRadius: '2px',
                        },
                        '.bar-threshold': {
                          position: 'absolute',
                          height: '24px',
                          width: '2px',
                          bgcolor: 'grey.200',
                          left: 'calc(329 / (329.09 * 1.2) * 100% - 2px) ',
                          borderRadius: '2px',
                          top: 0,
                        },
                      }}
                    >
                      <p>Meta diária: 329.09</p>
                      <div className="bar-container">
                        <div className="bar-bg">
                          <div className="bar-fill"></div>
                        </div>
                        <div className="bar-threshold"></div>
                      </div>
                    </Box>

                    <Box
                      sx={{
                        height: '46px',
                        alignSelf: 'flex-end',
                        '> p': {
                          fontSize: '12px',
                          fontWeight: 500,
                        },
                        '.bar-container': {
                          position: 'relative',
                          width: '160px',
                          height: '24px',
                        },
                        '.bar-bg': {
                          width: '100%',
                          height: '18px',
                          backgroundColor: 'grey.A100',
                          position: 'absolute',
                          bottom: 0,
                          borderRadius: '2px',
                          overflow: 'hidden',
                        },
                        '.bar-fill': {
                          width: 'calc(160 / (329.09 * 1.2) * 100%)',
                          backgroundColor: 'red',
                          height: '18px',
                          position: 'absolute',
                          borderRadius: '2px',
                        },
                        '.bar-threshold': {
                          position: 'absolute',
                          height: '24px',
                          width: '2px',
                          bgcolor: 'grey.200',
                          left: 'calc(329 / (329.09 * 1.2) * 100% - 2px) ',
                          borderRadius: '2px',
                          top: 0,
                        },
                      }}
                    >
                      <p>Meta mensal: 329.09</p>
                      <div className="bar-container">
                        <div className="bar-bg">
                          <div className="bar-fill"></div>
                        </div>
                        <div className="bar-threshold"></div>
                      </div>
                    </Box>
                  </Stack>
                </Stack>
              </RiskCard>
              <RiskCard
                title="Disponibilidade"
                subtitle="O parque está tendo muitas quedas de disponibilidade"
                btnText="Verificar WTGS"
              >
                <HighchartsReact
                  highcharts={Highcharts}
                  options={{
                    title: {
                      text: '',
                    },
                    chart: {
                      type: 'column',
                      height: 110,
                      margin: [0, 0, 22, 0],
                    },
                    credits: { enabled: false },
                    legend: { enabled: false },
                    xAxis: {
                      categories: [
                        '00h - 03h',
                        '04h - 07h',
                        '08h - 12h',
                        '13h - 16h',
                        '17h - 20h',
                        'Agora',
                      ],
                      lineWidth: 0,
                      gridLineWidth: 0,
                      labels: {
                        style: {
                          color: '#8A9197',
                        },
                        distance: 8,
                      },
                    },
                    yAxis: {
                      title: '',
                      max: 100,
                      labels: {
                        enabled: false,
                      },
                      gridLineWidth: 0,
                      plotLines: [
                        {
                          color: '#1B49E0',
                          value: 90,
                          zIndex: 10,
                        },
                        {
                          color: '#1B49E0',
                          value: 80,
                          zIndex: 10,
                          dashStyle: 'dash',
                        },
                      ],
                    },
                    plotOptions: {
                      column: {
                        borderRadius: 0,
                        pointWidth: 80,
                        states: {
                          hover: {
                            brightness: 0.05,
                          },
                        },
                      },
                    },
                    series: [
                      {
                        name: 'Disponibilidade',
                        data: [100, 78, 100, 100, 65, 50],
                        zones: [
                          {
                            value: 90,
                            color: '#F64849', // Red color for values below 90
                          },
                          {
                            color: '#ECEDEF', // Grey color for values above or equal to 90
                          },
                        ],
                      },
                    ],
                  }}
                />
              </RiskCard>
            </EventsGroup>
            <EventsGroup
              icon={<HandRaisedIcon />}
              eventsCount={10}
              title="Alertas preditivos"
            >
              <CustomizedTables />
            </EventsGroup>
            <EventsGroup
              icon={<MegaphoneIcon />}
              eventsCount={22}
              title="Novas ocorrências"
            >
              mais gráficos
            </EventsGroup>
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
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <Box sx={{ '> button': { p: 0, width: '100%', bgcolor: 'transparent' } }}>
      <Disclosure open={isOpen} onChange={() => setIsOpen(!isOpen)}>
        <DisclosureButton>
          <Box
            sx={{
              width: '100%',
              border: '1px solid',
              borderColor: 'border.main',
              borderRadius: '8px 8px 0 0',
              bgcolor: 'grey.50',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: '0.75rem',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                svg: {
                  height: '1.5rem',
                  width: '1.5rem',
                  color: 'grey.800',
                  fontWeight: 700,
                },
              }}
            >
              {props.icon}
              <Box
                sx={{
                  marginLeft: '1.25rem',
                  bgcolor: 'grey.200',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '12px',
                  padding: '4px',
                  borderRadius: '2px',
                }}
              >
                {props.eventsCount}
              </Box>
              <Box
                component="p"
                sx={{
                  fontWeight: 600,
                  marginLeft: '8px',
                  span: {
                    fontWeight: 500,
                    fontSize: '14px',
                    color: 'grey.800',
                    display: 'inline-block',
                    marginLeft: '8px',
                  },
                }}
              >
                {props.title}
                <span>no período selecionado</span>
              </Box>
            </Box>

            <Box
              sx={{
                svg: { width: '1.5rem', height: '1.5rem', color: 'grey.800' },
              }}
            >
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </Box>
          </Box>
        </DisclosureButton>
        <DisclosurePanel>
          <Stack
            sx={{
              padding: '1.5rem',
              border: '1px solid',
              borderRadius: '0 0 4px 4px',
              borderTop: 'none',
              borderColor: 'border.main',
            }}
            spacing="1.5rem"
          >
            {props.children}
          </Stack>
        </DisclosurePanel>
      </Disclosure>
    </Box>
  )
}

const RiskCard = (props: {
  title: string
  subtitle: string
  btnText: string
  children?: React.ReactNode
}) => {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderRadius: '4px',
        borderColor: 'border.main',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid',
          borderColor: 'border.main',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            flex: 1,
            margin: '1.5rem 1.5rem 1.75rem',
            fontWeight: 500,
            h3: {
              color: 'grey.200',
              fontSize: '20px',
              marginBottom: '4px',
            },
            '> p': { color: 'grey.500' },
          }}
        >
          <h3>{props.title}</h3>
          <p>{props.subtitle}</p>
        </Box>
        <Box
          component="button"
          sx={{
            fontWeight: 600,
            fontSize: '14px',
            color: 'grey.200',
            padding: '0.75rem 1rem',
            bgcolor: 'white',
            border: '1px solid',
            borderColor: '#D6DCE3',
            borderRadius: '2px',
            marginRight: '0.75rem',
            marginTop: '0.75rem',
            cursor: 'pointer',
          }}
        >
          {props.btnText}
        </Box>
      </Box>
      <Box sx={{ padding: '1rem 1.25rem 1.75rem' }}>{props.children}</Box>
    </Box>
  )
}
