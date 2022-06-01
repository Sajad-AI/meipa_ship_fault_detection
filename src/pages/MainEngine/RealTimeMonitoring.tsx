import { useEffect, useLayoutEffect, useState } from 'react';
import theme from '../../config/theme';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import useMediaQuery from '@mui/material/useMediaQuery';

import LineChart from '../../components/Common/LineChart';

const row = [
  ['MA', 159],
  ['MVSD', 120],
  ['CC', 12]
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
            <FormControl sx={{ minWidth: '15rem' }}>
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
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {row.map(([key, value], index) => {
              return (
                <TableCell
                  key={index}
                  component="div"
                  align="center"
                  sx={{ p: 1, pr: index !== row.length - 1 ? 4 : 0 }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Typography fontWeight="600">{key}</Typography>
                    <Typography sx={{ ml: 3 }}>{value}</Typography>
                  </Box>
                </TableCell>
              );
            })}
          </Box>
          <Button variant="contained" endIcon={<PlayArrow />}>
            Run
          </Button>
        </Stack>
      </Box>
      <Stack spacing={1}>
        <LineChart key={key} title="Load vs Time (sec)" subtitle="Real Graph" />
        <LineChart title="System Item vs Time (sec)" subtitle="Selected Engine CS" />
      </Stack>
    </Stack>
  );
}

export default RealTimeMonitoring;
