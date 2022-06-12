import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

import Charts from '../../components/HeatExchanger/FaultDetection/Charts';
import FaultState, { StateList } from '../../components/common/FaultState';
import KeyValueTable, { KeyValueTableRows } from '../../components/common/KeyValueTable';

const faultDetectionList: StateList = [
  {
    title: 'J.C.W. Cooler Fault',
    variant: 'success'
  },
  {
    title: '3Way Control Valve Fault',
    variant: 'error'
  },
  {
    title: 'J.C.W. Filter Fault',
    variant: 'error'
  },
  {
    title: 'J.C.W. #1 Pump Fault',
    variant: 'error'
  },
  {
    title: 'J.C.W. Motor',
    variant: 'error'
  },
  {
    title: 'J.C.W. #2 Pump',
    variant: 'error'
  },
  {
    title: 'J.C.W. #2 Motor',
    variant: 'success'
  }
];

const rows: KeyValueTableRows = [
  [
    ['FDCC CLR Tin Tout', 0.5],
    ['FDCC CLR Tin 3WV', 0.5],
    ['FDCC CLR Tout 3WW', 0.5]
  ],
  [
    ['FDCC CLT Tin Tout', 0.5],
    ['FDCC CLT Tin 3WV', 0.5],
    ['FDCC CLT Tout 3WW', 0.5]
  ],
  [
    ['FDSD #1 Mtr A', 0.03],
    ['FDSD #1 Pin', 0.03],
    ['FDSD #1 Pout', 0.03]
  ],
  [
    ['FDSD #2 Mtr A', 0.03],
    ['FDSD #2 Pin', 0.03],
    ['FDSD #2 Pout', 0.03]
  ]
];

function FaultDetection(): JSX.Element {
  return (
    <Stack spacing={3} divider={<Divider />}>
      <Charts />
      <Box>
        <FaultState title="J.C.W Cooling System Fault Detection" stateList={faultDetectionList} />
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          J.C.W. System: Fault Detection Corelation Coefficient (FDCC), Fault Detection Standard
          Deviation (FDSD)
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

export default FaultDetection;
