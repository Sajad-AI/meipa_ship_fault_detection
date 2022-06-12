import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import FaultState, { StateList } from '../../components/common/FaultState';
import DiagnosAndRecommendations from '../../components/common/DiagnosAndRecommendations';
import Table, { TableHeader, TableRows } from '../../components/common/Table';
import KeyValueTable, { KeyValueTableRows } from '../../components/common/KeyValueTable';

const faultStateList: StateList = [
  {
    title: 'Cyl1',
    variant: 'success'
  },
  {
    title: 'Cyl2',
    variant: 'error'
  },
  {
    title: 'Cyl3',
    variant: 'error'
  },
  {
    title: 'Cyl4',
    variant: 'error'
  },
  {
    title: 'Cyl5',
    variant: 'error'
  },
  {
    title: 'Cyl6',
    variant: 'error'
  },
  {
    title: 'Cyl7',
    variant: 'success'
  },
  {
    title: 'Cyl8',
    variant: 'success'
  },
  {
    title: 'TC1 Tin Spd',
    variant: 'error'
  },
  {
    title: 'TC2 Tin Spd',
    variant: 'success'
  },
  {
    title: 'Ld: ScavAP',
    variant: 'success'
  },
  {
    title: 'Ld:RPM',
    variant: 'success'
  }
];

const diagnosList = [
  {
    title: 'Cyl No. 6 Fault: Fuel V run hrs - 0, Fuel V remain hrs = 100'
  },
  {
    title: 'Cyl No. 6 Fault: Fuel V run hrs - 0, Fuel V remain hrs = 100'
  },
  {
    title: 'Cyl No. 6 Fault: Fuel V run hrs - 0, Fuel V remain hrs = 100'
  },
  {
    title: 'Cyl No. 6 Fault: Fuel V run hrs - 0, Fuel V remain hrs = 100'
  }
];

const recomendationList = [
  {
    title: 'Renew Cyl No. 6 fuel valve before new voyage'
  },
  {
    title: 'Renew Cyl No. 6 fuel valve before new voyage'
  },
  {
    title: 'Renew Cyl No. 6 fuel valve before new voyage'
  },
  {
    title: 'Renew Cyl No. 6 fuel valve before new voyage'
  }
];

const tableHeader: TableHeader = ['Cyl 1', 'Cyl 2', 'Cyl 3', 'Cyl 4', 'Cyl 5', 'Cyl 6', 'Ref Hrs'];
const tableRows: TableRows = [
  ['Fuel Valve Running Hrs', 1000, 0, 0, 0, 0, 0, 100],
  ['Piston Running Hrs', 3000, 0, 584.2, 584.2, 584.2, 584.2, 10],
  ['CC Bwt Load', -0.2554, 0.04564, 88.0, 88.0, 88.0, 88.0],
  ['CC Bwt scav. air pressure', -0.2554, 0.04564, 88.0, 88.0, 88.0, 88.0]
];

const TCFilterRunHrs: KeyValueTableRows = [[['TC 1', 510]], [['TC 2', 0]], [['REF', 1000]]];

const CCRelative: KeyValueTableRows = [
  [['Load / Cylinder Average', -0.15432]],
  [['Load / Scav Air Pressure', 0.6324]],
  [['Load / RPM', 0.345234]],
  [['Scav Pressure / Cylinder Average', 0.2387456]]
];

function FaultDiagnosis(): JSX.Element {
  return (
    <Stack spacing={3} divider={<Divider />}>
      <FaultState title="Detect Fault State" stateList={faultStateList} />
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          System Data
        </Typography>
        <Table header={tableHeader} rows={tableRows} />
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={12} sm={5}>
            <Typography variant="subtitle1" marginBottom={1}>
              TC Filter Run Hrs
            </Typography>
            <KeyValueTable rows={TCFilterRunHrs} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant="subtitle1" marginBottom={1}>
              CC Relative
            </Typography>
            <KeyValueTable rows={CCRelative} />
          </Grid>
        </Grid>
      </Box>
      <DiagnosAndRecommendations diagnosList={diagnosList} recommendationList={recomendationList} />
    </Stack>
  );
}

export default FaultDiagnosis;
