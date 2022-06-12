import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TableView from '@mui/icons-material/TableView';

import Charts from '../../components/GeneratorEngine/MonitorAndFaultDetection/Charts';
import FaultState, { StateList } from '../../components/common/FaultState';
import KeyValueTable, { KeyValueTableRows } from '../../components/common/KeyValueTable';
import Select from '../../components/common/Form/Select';

const rows: KeyValueTableRows = [
  [
    ['FDCC Load (kW) vs. Cylinder Exhaust Temp', 0.5],
    ['FDCC Between Each Cyl Texh', 0.5]
  ],
  [
    ['FDCC Load (kW) vs. T/C input temp', 0.5],
    ['FDCC kW vs. T/C output temp', 0.5]
  ]
];

const faultStateList: StateList = [
  {
    title: 'Cylinder #1 Exhaust Temp',
    variant: 'success'
  },
  {
    title: 'Cylinder #2 Exhaust Temp',
    variant: 'error'
  },
  {
    title: 'Cylinder #3 Exhaust Temp',
    variant: 'error'
  },
  {
    title: 'Cylinder #4 Exhaust Temp',
    variant: 'error'
  },
  {
    title: 'T/C Input Temp',
    variant: 'error'
  },
  {
    title: 'T/C Output Temp',
    variant: 'success'
  }
];

function MonitorAndFaultDetection(): JSX.Element {
  const [item, setItem] = useState('Generator Engine #1');

  return (
    <Stack spacing={3}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Select
          label="Generator Engine"
          value={item}
          setValue={setItem}
          sx={{ minWidth: '15rem' }}
        />
        <Button variant="outlined" startIcon={<TableView />}>
          SD Table
        </Button>
      </Box>
      <Charts />
      <Divider />
      <Box>
        <FaultState title="Generator Engine Fault State" stateList={faultStateList} />
      </Box>
      <Divider />
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Generator Engine FDCC
        </Typography>
        <KeyValueTable rows={rows} />
        <Alert severity="info" variant="outlined" sx={{ border: 0, justifyContent: 'flex-end' }}>
          <Typography variant="caption">
            Tin: Input Temperature | Tout: Output Temperature | Mtr: Motor | CLR: Cooler | 3WV: 3
            Way Valve | Pin: Input Pressure | Pout: Output Pressure
          </Typography>
        </Alert>
      </Box>
    </Stack>
  );
}

export default MonitorAndFaultDetection;
