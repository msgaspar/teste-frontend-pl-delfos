import { Box, Stack } from '@mui/material'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

export function NewOccurrencesChart() {
  return (
    <Stack direction="row" sx={{ h3: { color: 'grey.200', fontWeight: 500 } }}>
      <Box sx={{ width: '50%' }}>
        <h3>Alarmes mais acionados</h3>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            title: {
              text: '',
            },
            chart: {
              type: 'bar',
              margin: [16, 0, 0, 100],
              height: 200,
              width: 320,
            },
            credits: { enabled: false },
            legend: { enabled: false },

            xAxis: {
              lineWidth: 0,
              gridLineWidth: 0,
              categories: [
                'Operando',
                'Sem sinal',
                'Alarme',
                'Parado',
                'Outros',
                'M Preventiva',
                'M Corretiva',
                'Ambiental',
              ],
              labels: {
                align: 'left',
                style: {
                  color: '#615E69',
                  fontWeight: 600,
                },
                distance: 100,
              },
            },
            yAxis: {
              title: '',
              visible: false,
              gridLineWidth: 0,
            },
            plotOptions: {
              bar: {
                stacking: 'percentage',
                enableMouseTracking: false,
                borderRadius: 0,
                pointWidth: 16,
                pointPadding: 0,
                groupPadding: 0.08,
                states: {
                  hover: {
                    brightness: 0.05,
                  },
                },
              },
            },
            series: [
              {
                data: [90, 80, 70, 60, 50, 40, 30, 20],
                color: '#ECEDEF',
              },
              {
                name: 'Acionados',
                data: [10, 20, 30, 40, 50, 60, 70, 80],
                colorByPoint: true,
                dataLabels: {
                  enabled: true,
                  x: 1000,
                  format: '{y}%',
                  style: {
                    color: '#8C97A1',
                    textOutline: 'none',
                  },
                },
              },
            ],
          }}
        />
      </Box>
      <Box sx={{ width: '50%' }}>
        <h3>Assets com maiores downtimes</h3>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            title: {
              text: '',
            },
            chart: {
              type: 'bar',
              margin: [16, 0, 0, 100],
              height: 250,
              width: 320,
            },
            credits: { enabled: false },
            legend: { enabled: false },

            xAxis: {
              lineWidth: 0,
              gridLineWidth: 0,
              categories: [
                'Asset name',
                'Asset name',
                'Asset name',
                'Asset name',
                'Asset name',
                'Asset name',
                'Asset name',
                'Asset name',
                'Asset name',
                'Asset name',
              ],
              labels: {
                align: 'left',
                style: {
                  color: '#615E69',
                  fontWeight: 600,
                },
                distance: 100,
              },
            },
            yAxis: {
              title: '',
              visible: false,
              gridLineWidth: 0,
              max: 110,
            },
            plotOptions: {
              bar: {
                stacking: 'percentage',
                enableMouseTracking: false,
                borderRadius: 0,
                pointWidth: 16,
                pointPadding: 0,
                groupPadding: 0.08,
                states: {
                  hover: {
                    brightness: 0.05,
                  },
                },
              },
            },
            series: [
              {
                data: [20, 30, 50, 60, 60, 65, 60, 70, 80, 85],
                color: '#ECEDEF',
              },
              {
                data: [10, 20, 10, 10, 10, 20, 10, 5, 5, 5],
                color: '#FFC599',
                dataLabels: {
                  enabled: true,
                  x: 1000,
                  format: '56x',
                  style: {
                    color: '#8C97A1',
                    textOutline: 'none',
                  },
                },
              },
              {
                data: [10, 20, 25, 10, 10, 5, 10, 5, 5, 3],
                color: '#FF7005',
              },
              {
                data: [50, 15, 10, 10, 10, 5, 10, 10, 5, 2],
                color: '#F42829',
              },
              {
                data: [10, 15, 5, 10, 10, 5, 10, 10, 5, 5],
                color: '#E6C84C',
              },
            ],
          }}
        />
      </Box>
    </Stack>
  )
}
