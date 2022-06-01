import Chart from 'react-apexcharts';

import theme from '../../config/theme';

type Props = {
  title: string;
  subtitle: string;
};

function LineChart({ title, subtitle }: Props): JSX.Element {
  const options = {
    chart: {
      type: 'line' as 'line',
      zoom: {
        enabled: false
      },
      background: '#E5E5E580',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight' as 'straight',
      colors: [theme.palette.primary.main],
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
      categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    }
  };

  const series = [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ];

  return <Chart options={options} series={series} type="line" width="100%" height="350px" />;
}

export default LineChart;
