import { useLayoutEffect, useState } from 'react';
import theme from '../../config/theme';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PlayArrow from '@mui/icons-material/PlayArrow';
import useMediaQuery from '@mui/material/useMediaQuery';

import LineChart, { ApexSeries } from '../../components/common/LineChart';
import Select from '../../components/common/Form/Select';
import KeyValueTable, { KeyValueTableRows } from '../../components/common/KeyValueTable';

const row: KeyValueTableRows = [
  [
    ['MA', 159],
    ['MVSD', 120],
    ['CC', 12]
  ]
];

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

function RealTimeMonitoring(): JSX.Element {
  const xs = useMediaQuery(theme.breakpoints.down('sm'));

  const [item, setItem] = useState('RPM');
  const [key, setKey] = useState(0);

  useLayoutEffect(() => {
    setKey(key + 1);
  }, []);

  return (
    <Stack spacing={5}>
      <Box sx={{ display: { sm: 'flex' } }}>
        <Stack direction={xs ? 'column' : 'row'} spacing={2}>
          <Box>
            <Select label="Item" value={item} setValue={setItem} sx={{ minWidth: '15rem' }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} sm={6}>
              <KeyValueTable rows={row} />
            </Grid>
          </Box>
          <Button variant="contained" endIcon={<PlayArrow />}>
            Run
          </Button>
        </Stack>
      </Box>
      <Stack spacing={1}>
        <LineChart
          key={key}
          title="Load vs Time (sec)"
          subtitle="Real Graph"
          series={chartSeries}
        />
        <LineChart
          title="System Item vs Time (sec)"
          subtitle="Selected Engine CS"
          series={chartSeries}
        />
      </Stack>
    </Stack>
  );
}

export default RealTimeMonitoring;
