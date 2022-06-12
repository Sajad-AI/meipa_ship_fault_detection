import { useLayoutEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import PlayArrow from '@mui/icons-material/PlayArrow';

import DateRangePicker from '../../components/common/DateRangePicker';

import LineChart, { ApexSeries } from '../../components/common/LineChart';
import Select from '../../components/common/Form/Select';

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

function GeneratorEngine(): JSX.Element {
  const [item, setItem] = useState('Generator A');
  const [item2, setItem2] = useState('Cylinder 1 Temp');
  const [key, setKey] = useState(0);

  useLayoutEffect(() => {
    setKey(key + 1);
  }, []);

  return (
    <Stack spacing={5}>
      <Box sx={{ display: { sm: 'flex' } }}>
        <Grid container spacing={2}>
          <Grid container item xs={12} sm={5} spacing={2}>
            <Grid xs={6} item>
              <Select label="Item 1" value={item} setValue={setItem} fullWidth />
            </Grid>
            <Grid xs={6} item>
              <Select label="Item 2" value={item2} setValue={setItem2} fullWidth />
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={7} spacing={2}>
            <Grid item xs={12} sm={8}>
              <DateRangePicker />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
              <Button variant="contained" endIcon={<PlayArrow />}>
                Run
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Stack spacing={1}>
        <LineChart
          key={key}
          title="RPM and Cylinder 1 Temp"
          subtitle="CC Trend between"
          series={chartSeries}
        />
        <LineChart
          title="Generator A and Cylinder 1 Temp"
          subtitle="CC Trend between"
          series={chartSeries}
        />
      </Stack>
    </Stack>
  );
}

export default GeneratorEngine;
