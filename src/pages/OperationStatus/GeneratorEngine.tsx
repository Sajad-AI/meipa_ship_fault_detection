import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Table, { TableHeader, TableRows } from '../../components/common/Table';

const tableHeader: TableHeader = ['GEN1', 'GEN2', 'GEN3'];
const tableRows: TableRows = [
  ['RUn', 'success', 'success', 'success'],
  ['RUN Hours', '24:36 (min)', '24:36 (min)', '24:36 (min)'],
  ['date and time', '2022.05.15 10:30AM', '2022.05.15 10:30AM', '2022.05.15 10:30AM'],
  ['Stop Date', '2022.05.15 10:30AM', '2022.05.15 10:30AM', '2022.05.15 10:30AM'],
  ['LO Input pressure', -0.2554, 0.85654, 88.0],
  ['cw input pressure', -0.2554, 0.85654, 88.0],
  ['cw input temp', -0.2554, 0.85654, 88.0],
  ['start a pressure', -0.2554, 0.85654, 88.0],
  ['fo input pressure', -0.2554, 0.85654, 88.0],
  ['fo input temp', -0.2554, 0.85654, 88.0],
  ['tc input remp', -0.2554, 0.85654, 88.0],
  ['tc output temp', -0.2554, 0.85654, 88.0],
  ['load (kw)', -0.2554, 0.85654, 88.0],
  ['voltage', -0.2554, 0.85654, 88.0],
  ['ampare', -0.2554, 0.85654, 88.0],
  ['kva', -0.2554, 0.85654, 88.0],
  ['Power filter', -0.2554, 0.85654, 88.0],
  ['brg temp', -0.2554, 0.85654, 88.0],
  ['r wnd temp', -0.2554, 0.85654, 88.0],
  ['s wnd temp', -0.2554, 0.85654, 88.0],
  ['t wnd temp', -0.2554, 0.85654, 88.0]
];

function GeneratorEngine(): JSX.Element {
  return (
    <Box>
      <Typography variant="subtitle1" marginBottom={2}>
        Star Ranger Main Engine Operation Status
      </Typography>
      <Table header={tableHeader} rows={tableRows} />
    </Box>
  );
}

export default GeneratorEngine;
