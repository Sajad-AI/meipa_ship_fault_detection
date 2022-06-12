import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Table, { TableHeader, TableRows } from '../../components/common/Table';
import KeyValueTable, { KeyValueTableRows } from '../../components/common/KeyValueTable';

const tableHeader: TableHeader = [
  'ME LO',
  'ME JCW',
  'METC LO',
  'ME A Clr CW',
  'Cntrl C FW',
  'Main CSW',
  'JCW Common'
];
const tableRows: TableRows = [
  ['Input pressure', 159, 6.0, 24, 4.0, 10, 20, 30],
  ['output pressure', 237, 9.0, 37, 4.3, 10, 20, 30],
  ['input tempreture', 262, 16.0, 24, 6.0, 10, 20],
  ['output tempreture', 305, 3.7, 67, 4.3, 10, 20]
];

const motorTableHeader = ['ME LO', 'ME JCW', 'Fire GS', 'Cntrl CFW', 'FW', 'Main CSW'];
const motorTableRows = [
  ['Mtr1 A', 1000, 0, 0, 0, 34],
  ['Mtr2 A', 3000, 0.04564, 584.2, 584.2, 584.2, 584.2]
];

const coolerTableHeader = ['Cooler 3WV', 'Cooler Input T', 'Cooler Output T'];
const coolerTableRows = [
  ['Mtr1 A', 1000, 0, 0],
  ['Mtr2 A', 3000, 0.04564, 584.2]
];

const rows: KeyValueTableRows = [
  [['Bfr Cooler', 1000]],
  [['Aft Cooler', 3000]],
  [['ME Air cooler p diff', 3000]]
];

function HeatExchangeMotorPump(): JSX.Element {
  return (
    <Stack spacing={4}>
      <Box sx={{ display: 'flex' }}>
        <Typography fontWeight={600}>Date and time</Typography>
        <Typography marginLeft={5}>2022.05.28 10:30 AM</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">Fluid Pressure and Tempreture</Typography>
        <Table header={tableHeader} rows={tableRows} />
      </Box>
      <Box>
        <Typography variant="subtitle1">Motor</Typography>
        <Table header={motorTableHeader} rows={motorTableRows} />
      </Box>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={7}>
            <Typography variant="subtitle1">Cooler</Typography>
            <Table header={coolerTableHeader} rows={coolerTableRows} />
          </Grid>
          <Grid item xs={8} sm={4}>
            <Typography variant="subtitle1" marginBottom={1}>
              Scav A Cooler Air Tempreture
            </Typography>
            <KeyValueTable rows={rows} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default HeatExchangeMotorPump;
