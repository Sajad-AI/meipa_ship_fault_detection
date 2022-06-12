import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import KeyValueTable, { KeyValueTableRows } from '../../components/common/KeyValueTable';
import Table, { TableHeader, TableRows } from '../../components/common/Table';

const tableHeader: TableHeader = [
  'Cyl 1',
  'Cyl 2',
  'Cyl 3',
  'Cyl 4',
  'Cyl 5',
  'Cyl 6',
  'Inlet T',
  'Outlet T'
];

const tableRows: TableRows = [
  ['JCW Temp', 159, 6.0, 24, 4.0, 10, 20, 30, 40],
  ['PCO TEmp', 237, 9.0, 37, 4.3, 10, 20, 30, 40],
  ['Exhaust gas temp', 262, 16.0, 24, 6.0, 10, 20],
  ['scav. air temp', 305, 3.7, 67, 4.3, 10, 20]
];

const leftRows: KeyValueTableRows = [
  [['Date and time', '2022.05.28 10:30 AM']],
  [['Main Engine Run Hours', '15:20:30 Sec']],
  [['Main engine speed', '1200 RPM']],
  [['Main engine load', '250 kW']],
  [['Exh v Spring A input p', '250']]
];

const middleRows: KeyValueTableRows = [
  [['TC Speed', '250 RPM']],
  [['TC Gas Temp', '250']],
  [['TC Gas Pressure', '1200']],
  [['scav air rcv t', '250']]
];

const rightRows: KeyValueTableRows = [
  [['TC Air input T1', '30']],
  [['TC Air input T2', '20']],
  [['cyl oil input t', '250']],
  [['scav air rcv p', '50']]
];

function MainEngine(): JSX.Element {
  return (
    <Stack spacing={3} divider={<Divider />}>
      <Box>
        <Typography variant="subtitle1">Star Ranger Main Engine Operation Status</Typography>
        <Table header={tableHeader} rows={tableRows} />
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <KeyValueTable rows={leftRows} />
          </Grid>
          <Grid item sm={4}>
            <KeyValueTable rows={middleRows} />
          </Grid>
          <Grid item sm={4}>
            <KeyValueTable rows={rightRows} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default MainEngine;
