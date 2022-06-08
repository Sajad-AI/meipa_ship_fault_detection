import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import LineChart from '../Common/LineChart';

const row = [
  ['MA', 159],
  ['MVSD', 120],
  ['CC', 12]
];

function MiddleChart(): JSX.Element {
  const [item, setItem] = useState('RPM');
  const [item2, setItem2] = useState('RPM');

  return (
    <Stack spacing={1}>
      <Box>
        <LineChart title="M/E Item vs Time (sec)" subtitle="Real Graph: Main Engine Item vs Time" />
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="item-select-label">Item</InputLabel>
              <Select
                labelId="item-select-label"
                id="item-select"
                value={item}
                label="Item"
                onChange={(event) => setItem(event.target.value)}
              >
                <MenuItem value={'RPM'}>RPM</MenuItem>
                <MenuItem value={'RPM2'}>RPM 2</MenuItem>
                <MenuItem value={'RPM3'}>RPM 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="item-2-select-2-label">Item 2</InputLabel>
              <Select
                labelId="item-2-select-2-label"
                id="item-2-select-2"
                value={item2}
                label="Item 2"
                onChange={(event) => setItem2(event.target.value)}
              >
                <MenuItem value={'RPM'}>RPM</MenuItem>
                <MenuItem value={'RPM2'}>RPM 2</MenuItem>
                <MenuItem value={'RPM3'}>RPM 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box>
        {row.map(([key, value], index) => {
          return (
            <TableCell
              key={index}
              component="div"
              align="center"
              sx={{ p: 1, pr: index !== row.length - 1 ? 3 : 0 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Typography fontWeight="600">{key}</Typography>
                <Typography sx={{ ml: 2 }}>{value}</Typography>
              </Box>
            </TableCell>
          );
        })}
      </Box>
    </Stack>
  );
}

export default MiddleChart;
