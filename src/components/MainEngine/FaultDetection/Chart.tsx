import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LineChart, { ApexSeries } from '../../common/LineChart';

const chartSeries: ApexSeries = [
  {
    name: 'Series 1',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  },
  {
    name: 'Series 2',
    data: [100, 12, 4, 45, 23, 90, 20, 34, 3]
  },
  {
    name: 'Series 3',
    data: [1, 50, 60, 70, 80, 85, 90, 95, 100]
  }
];

function FaultDetectionChart(): JSX.Element {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Charts
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LineChart
            title={'MVSD & CC'}
            subtitle={
              'CS System Item. Moving Standard Deviation (MVSD) & Correlation Coefficient (CC)'
            }
            series={chartSeries}
            hideXAxis={false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LineChart
            title={'MVavr & MVSD of CC'}
            subtitle={'Gross volume: Moving average & Moving Standard Deviation of CC'}
            series={chartSeries}
            hideXAxis={false}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FaultDetectionChart;
