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
    ['MVSD', 149.5]
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

function LeftChart(): JSX.Element {
  const [item, setItem] = useState('RPM');

  return (
    <Stack spacing={1}>
      <Box>
        <LineChart
          title="M/E Item vs Time (sec)"
          subtitle="Real Graph: Main Engine Item vs Time"
          series={chartSeries}
        />
      </Box>
      <Box>
        <Grid item xs={6}>
          <Select label="Item" value={item} setValue={setItem} fullWidth />
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

export default LeftChart;
