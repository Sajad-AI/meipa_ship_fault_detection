import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import LineChart, { ApexSeries } from '../../common/LineChart';
import Select from '../../common/Form/Select';
import KeyValueTable, { KeyValueTableRows } from '../../common/KeyValueTable';

const row: KeyValueTableRows = [
  [
    ['MA', 26],
    ['MVSD', 26]
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
  }
];

function RightChart(): JSX.Element {
  const [item, setItem] = useState('PP1 Pout');
  const [item2, setItem2] = useState('Mtr 1 Current (A)');

  return (
    <Stack spacing={1}>
      <Box>
        <LineChart
          title="PP1 Pout vs Motor 1 Curr.(A)"
          subtitle="J.C.W Pump and Motor"
          series={chartSeries}
        />
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Select label="Item 1" value={item} setValue={setItem} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Select label="Item 2" value={item2} setValue={setItem2} fullWidth />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid item xs={8}>
          <KeyValueTable rows={row} />
        </Grid>
      </Box>
    </Stack>
  );
}

export default RightChart;
