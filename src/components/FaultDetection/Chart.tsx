import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LineChart from '../Common/LineChart';

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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LineChart
            title={'MVavr & MVSD of CC'}
            subtitle={'Gross volume: Moving average & Moving Standard Deviation of CC'}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FaultDetectionChart;
