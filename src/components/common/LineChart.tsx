import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import theme from '../../config/theme';

type ApexSeries = {
  name: string;
  data: number[];
}[];

type Props = {
  title: string;
  subtitle: string;
  series: ApexSeries;
  hideXAxis?: boolean;
};

function LineChart({ title, subtitle, series, hideXAxis }: Props): JSX.Element {
  const options: ApexOptions = {
    colors: [theme.palette.primary.main, theme.palette.error.main, theme.palette.warning.main],
    chart: {
      type: 'line' as 'line',
      zoom: {
        enabled: false
      },
      background: '#E5E5E580',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true
        // color: '#0F56B3',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight' as 'straight',
      colors: [theme.palette.primary.main, theme.palette.error.main, theme.palette.warning.main],
      width: 2
    },
    title: {
      text: title,
      align: 'left' as 'left',
      margin: 20,
      style: {
        fontFamily: 'Manrope',
        color: theme.palette.primary.main,
        fontSize: '20px'
      }
    },
    subtitle: {
      text: subtitle,
      align: 'left' as 'left',
      margin: 15
    },
    grid: {
      row: {
        opacity: 0.5
      }
    },
    xaxis: {
      labels: {
        show: !hideXAxis
      },
      axisBorder: {
        show: !hideXAxis
      },
      axisTicks: {
        show: !hideXAxis
      },
      categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    yaxis: [
      {
        seriesName: 'Series 1'
      },
      {
        opposite: true,
        seriesName: 'Series 2'
      }
    ],
    legend: {
      show: true,
      showForSingleSeries: true,
      position: 'right' as 'right',
      floating: true,
      offsetY: -10,
      markers: {
        offsetX: -5,
        offsetY: 2
      }
    }
  };

  return <Chart options={options} series={series} type="line" width="100%" height="350px" />;
}

LineChart.defaultProps = {
  hideXAxis: false
};

export type { ApexSeries };

export default LineChart;
