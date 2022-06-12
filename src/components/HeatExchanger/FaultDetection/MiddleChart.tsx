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
    ['MVSD', 26],
    ['CC', 149.5]
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

function MiddleChart(): JSX.Element {
  const [item, setItem] = useState('CLR Input Temp');
  const [item2, setItem2] = useState('CLR Input Temp');

  return (
    <Stack spacing={1}>
      <Box>
        <LineChart
          title="CLR Input Temp vs CLR Input Temp"
          subtitle="J.C.W. Cooler - Time"
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
        <Grid item xs={12}>
          <KeyValueTable rows={row} />
        </Grid>
      </Box>
    </Stack>
  );
}

export default MiddleChart;
