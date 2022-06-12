import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import LineChart, { ApexSeries } from '../../common/LineChart';

const chartSeries: ApexSeries = [
  {
    name: 'Series 1',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  },
  {
    name: 'Series 2',
    data: [100, 12, 4, 45, 23, 90, 20, 34, 3]
  }
];

function FireGSCharts(): JSX.Element {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Charts
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <LineChart
            title="Fire GS Pump vs Time (sec)"
            subtitle="Fire GS Pump vs Time"
            series={chartSeries}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LineChart
            title="Pump Motor vs Time (sec)"
            subtitle="Mn CSW Pump Motor vs Time"
            series={chartSeries}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LineChart title="" subtitle="FW Pump Motor vs Time" series={chartSeries} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FireGSCharts;
