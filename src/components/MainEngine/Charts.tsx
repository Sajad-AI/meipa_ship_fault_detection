import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import LeftChart from './LeftChart';
import MiddleChart from './MiddleChart';
import RightChart from './RightChart';

function MainEngineCharts(): JSX.Element {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Charts
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <LeftChart />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MiddleChart />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RightChart />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainEngineCharts;
